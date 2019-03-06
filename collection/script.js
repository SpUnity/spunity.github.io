'use strict'

var form = document.forms.movies || false,
input = form.searchString || false,
button = form.searchStart || false,
result = document.body.querySelector('.result') || false,
blockFilter = document.body.querySelector('.filter') || false,
amountMovies = document.body.querySelector('#amountMovies') || false,
showFilter = document.body.querySelector('#filters') || false,
xhr = new XMLHttpRequest(),
data = [],
filteredData = []
;

checkNewData();

if (!showError(form, input, button, result)) {
  form.onsubmit = function(e) {
    e.preventDefault();

    let userText = input.value || '',
    movies = []
    ;

    deletePreviousElements();
    turnOffFilter();
    showAmountMovies();
    movies = filterSearch(filteredData, userText);

    if (!movies.length) {
      showNoResults();
      return;
    }

    movies.forEach(function(movie) {
      let showingResult = result.cloneNode(true);

      insertContent(movie, showingResult, 'image', 'name', 'year', 'genre', 'director', 'country', 'duration');
      addNewMovie(showingResult);
    });

    showAmountMovies();
  };
}

if (!showError(blockFilter)) {
  blockFilter.addEventListener('change', function(e) {
    deletePreviousElements();
    showAmountMovies();

    if (e.target === showFilter && showFilter.checked === false) {
      filteredData = data;
      return ;
    }

    filterMovies();

    filteredData.forEach(function(movie) {
      let showingResult = result.cloneNode(true);

      insertContent(movie, showingResult, 'image', 'name', 'year', 'genre', 'director', 'country', 'duration');
      addNewMovie(showingResult);
    });

    showAmountMovies();
  });
}

//------------------------------functions

function checkNewData() {
  xhr.open('GET', 'https://spunity.github.io/collection/json/data.json');
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return ;
    }

    try {
      data = JSON.parse(xhr.responseText);
      filteredData = data;
    } catch (e) {
      data = [];
    }

    if (!data.length) {
      try {
        data = JSON.parse(localStorage['allMovies']);
        filteredData = data;
      } catch (e) {
        showError(false);
      }
    } else if (localStorage['allMovies'] !== xhr.responseText) {
      localStorage['allMovies'] = xhr.responseText;
    }
  };
}

function showError() {
  for (var i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      var errorPage = document.createElement('h1');

      document.body.innerHTML = '';
      errorPage.innerHTML = 'Наш сервис временно недоступен. Приносим свои извинения.';
      document.body.appendChild(errorPage);
      return true;
    }
  }
}

function deletePreviousElements() {
  while (document.body.querySelector('.new-result')) {
    document.body.removeChild(document.body.querySelector('.new-result'));
  }
  if (document.body.querySelector('.empty-result')) {
    document.body.removeChild(document.body.querySelector('.empty-result'));
  }
}

function filterSearch(arr, text) {
  return arr.filter(function(movie) {
    return movie.name.toLowerCase() === text.toLowerCase() ||
    movie.director.toLowerCase() === text.toLowerCase();
  });
}

function showNoResults() {
  let emptyResult = document.createElement('p');

  emptyResult.innerHTML = 'Нет результатов!';
  emptyResult.classList.add('empty-result');
  emptyResult.style.color = 'red';
  emptyResult.style.textAlign = 'center';
  document.body.insertBefore(emptyResult, result);
}

function insertContent(obj, element, image) {
  element.querySelector('.result-' + image).src = obj[image] || '';

  for (var i = 3; i < arguments.length; i++) {
    element.querySelector('.result-' + arguments[i]).innerHTML = obj[arguments[i]] || '';
  }
}

function addNewMovie(element) {
  element.style.display = 'flex';
  element.classList.add('new-result');
  document.body.insertBefore(element, document.body.querySelector('script'));
}

function filterMovies() {
  var moviesBefore = document.querySelector('#beforeYear'),
  moviesAfter = document.querySelector('#afterYear'),
  genres = document.querySelector('#genres').querySelectorAll('label'),
  countries = document.querySelector('#countries').querySelectorAll('label')
  ;

  filteredData = data.filter(function(movie) {
    if (!(movie.year < 2000 && moviesBefore.checked || movie.year >= 2000 && moviesAfter.checked)) {
      return false;
    }

    var noMatch = true,
    movieGenre = 'elementLabel',
    movieGenreInput = 'elementInput',
    movieGenreText = '',
    movieCountry = 'elementLabel',
    movieCountryInput = 'elementInput',
    movieCountryText = ''
    ;

    for (var i = 0; i < genres.length; i++) {
      movieGenre = genres[i] || document.createElement('label');
      movieGenreInput = movieGenre.querySelector('input') || document.createElement('input');
      movieGenreText = movieGenre.textContent.toLowerCase() || '';

      if (movie['genre'].indexOf(movieGenreText) > -1) {
        if (movieGenreInput.checked === true) {
          noMatch = false;
        }
      }
    }

    if (noMatch) {
      return false;
    }
    noMatch = true;

    for (var i = 0; i < countries.length; i++) {
      movieCountry = countries[i] || document.createElement('label');
      movieCountryInput = movieCountry.querySelector('input') || document.createElement('input');
      movieCountryText = movieCountry.textContent.toLowerCase() || '';

      if (movie['country'].toLowerCase().indexOf(movieCountryText) > -1) {
        if (movieCountryInput.checked === true) {
          noMatch = false;
        }
      }
    }

    if (noMatch) {
      return false;
    }

    return true;
  });
}

function showAmountMovies() {
  if (!amountMovies) {
    return ;
  }

  var arrMovies = document.querySelectorAll('.new-result');

  amountMovies.innerHTML = '' + arrMovies.length;
}

function turnOffFilter() {
  showFilter.checked = false;
}
