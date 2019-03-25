import executeAndDeleteHandler from '../helpers/delete_handler';
import fillFilters from '../helpers/fill_filters';
import isButtonSelected from '../helpers/check_button';
import handleFilterHeaderButtons from '../helpers/handle_filter_header';
import filterMovies from '../helpers/filter_movies';
import transformIdToString from '../helpers/transform_to_string';

function ModelCollection() {
  this.arrHeaderButtons = ['button_year', 'button_genre', 'button_country'];
}

ModelCollection.prototype.checkData = function() {
  let tempKeys = false,
  tempData = false
  ;
  $.ajax('https://spunity.github.io/collection/json/keys.json', {
    method: 'GET',
    dataType: 'json',
    error: function () {
          tempKeys = JSON.parse(localStorage['allKeys']);
          fillFilters(tempKeys);
          sendAjaxForMainData();
    },
    success: function(dataKeys, status, xhr) {
      localStorage['allKeys'] = xhr.responseText;
      tempKeys = dataKeys;
      fillFilters(tempKeys);
      sendAjaxForMainData();
    }
  });

  let timerId = setInterval(function() {
    window.keys = tempKeys;
    window.allData = tempData;
    if (keys && allData) {
      executeAndDeleteHandler($('#list-checkbox'));
      clearInterval(timerId);
    }
  }, 200);

  function sendAjaxForMainData() {
    $.ajax('https://spunity.github.io/collection/json/data.json', {
      method: 'GET',
      dataType: 'json',
      error: function () {
          tempData = JSON.parse(localStorage['allMovies']);
      },
      success: function(data, status, xhr) {
        localStorage['allMovies'] = xhr.responseText;
        tempData = data;
      }
    });
  }
};

ModelCollection.prototype.filterData = function(elem) {
  let id = elem.id
  ;
  $('#'+ id).toggleClass('selected-button');

  if (handleFilterHeaderButtons(id, this.arrHeaderButtons)) {
    return false;
  }
  return allData.filter(function(item) {
    return filterMovies(item);
  });
};

ModelCollection.prototype.searchMovie = function(arr) {
  if (!isButtonSelected(this.arrHeaderButtons)) {
    arr = allData;
  }
  return arr.filter(function(movie) {
    let userText = ($('#search_string').val()).toLowerCase(),
    nameMovie = movie.name.toLowerCase(),
    directorMovie = movie.director.toLowerCase()
    ;

    return nameMovie.indexOf(userText) > -1 ||
    directorMovie.indexOf(userText) > -1;
  });
};

ModelCollection.prototype.assembleMovieObj = function(obj) {
  let movieObj = {
    name: ['Название', ''],
    year: ['Год', ''],
    genre: ['Жанр', ''],
    director: ['Режиссер', ''],
    country: ['Страна', ''],
    duration: ['Продолжительность', ''],
    linkImage: ''
  }
  ;
  obj['genre'] = transformIdToString(obj['genreId'], 'genre', keys) || '';
  obj['country'] = transformIdToString(obj['countryId'], 'country', keys) || '';

  for (let prop in movieObj) {
    if (prop === 'linkImage') {
      movieObj[prop] = obj[prop] || '';
    } else {
      movieObj[prop][1] = obj[prop] || '';
    }
  }

  return movieObj;
};

export default ModelCollection;
