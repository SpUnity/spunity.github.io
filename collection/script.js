'use strict'

var form = document.forms.movies || false,
input = form.searchString || false,
button = form.searchStart || false,
result = document.body.querySelector('.result') || false,
xhr = new XMLHttpRequest(),
data = []
;

if (JSON.parse(localStorage['allMovies'])) {
  data = JSON.parse(localStorage['allMovies']);
} else {
  xhr.open('GET', 'https://spunity.github.io/collection/json/data.json');
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
      return ;
    }
    data = JSON.parse(xhr.responseText) || [];
    localStorage['allMovies'] = xhr.responseText;
  };
}

if (!form || !input || !button || !result || !data.length) {
  var errorPage = document.createElement('h1');

  document.body.innerHTML = '';
  errorPage.innerHTML = 'Наш сервис временно недоступен. Приносим свои извинения.';
  document.body.appendChild(errorPage);
} else {
  button.addEventListener('click', function() {
    let userText = input.value || '',
    movies = []
    ;

    while (document.body.querySelector('.new-result')) {
      document.body.removeChild(document.body.querySelector('.new-result'));
    }
    if (document.body.querySelector('.empty-result')) {
      document.body.removeChild(document.body.querySelector('.empty-result'));
    }

    movies = data.filter(function(movie) {
      return movie.name.toLowerCase() === userText.toLowerCase() ||
      movie.director.toLowerCase() === userText.toLowerCase();
    });

    if (!movies.length) {
      let emptyResult = document.createElement('p');

      emptyResult.innerHTML = 'Нет результатов!';
      emptyResult.classList.add('empty-result');
      emptyResult.style.color = 'red';
      emptyResult.style.textAlign = 'center';
      document.body.insertBefore(emptyResult, result);

      return;
    }

    movies.forEach(function(movie) {
      let showingResult = result.cloneNode(true);

      showingResult.querySelector('.result-image').src = movie.linkImage || '';
      showingResult.querySelector('.result-name').innerHTML = movie.name || '';
      showingResult.querySelector('.result-year').innerHTML = movie.year || '';
      showingResult.querySelector('.result-genre').innerHTML = movie.genre || '';
      showingResult.querySelector('.result-director').innerHTML = movie.director || '';
      showingResult.querySelector('.result-country').innerHTML = movie.country || '';
      showingResult.querySelector('.result-duration').innerHTML = movie.duration || '';

      showingResult.style.display = 'flex';
      showingResult.classList.add('new-result');
      document.body.insertBefore(showingResult, document.body.querySelector('script'));
    });
  });
}
