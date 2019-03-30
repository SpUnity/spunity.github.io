import HelperCollection from '../helpers/app-helpers';

let helper = new HelperCollection();

export default class ModelCollection {
  constructor () {
    this.arrHeaderButtons = ['button_year', 'button_genre', 'button_country'];
  }

  filterData(elem) {
    let id = elem.id
    ;
    $('#'+ id).toggleClass('selected-button');

    if (helper.handleFilterHeaderButtons(id, this.arrHeaderButtons)) {
      return false;
    }
    return allData.filter(function(item) {
      return helper.filterMovies(item);
    });
  }

  searchMovie(arr) {
    let userText = ($('#search_string').val()).toLowerCase()
    ;
    if (!helper.isButtonSelected(this.arrHeaderButtons)) {
      arr = allData;
    }
    if (userText === '') {
      arr = [];
    }
    return arr.filter(function(movie) {
      let nameMovie = movie.name.toLowerCase(),
          directorMovie = movie.director.toLowerCase()
      ;

      return nameMovie.indexOf(userText) > -1 ||
          directorMovie.indexOf(userText) > -1;
    });
  }

  assembleMovieObj(obj) {
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
    obj['genre'] = helper.transformIdToString(obj['genreId'], 'genre', keys) || '';
    obj['country'] = helper.transformIdToString(obj['countryId'], 'country', keys) || '';

    for (let prop in movieObj) {
      if (prop === 'linkImage') {
        movieObj[prop] = obj[prop] || '';
      } else {
        movieObj[prop][1] = obj[prop] || '';
      }
    }

    return movieObj;
  }
}