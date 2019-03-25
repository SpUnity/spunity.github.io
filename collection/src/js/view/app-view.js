function ViewCollection() {
  this.resultBlock = $('#chosen_movies')
  ;
}

ViewCollection.prototype.removePreviousElements = function() {
  this.resultBlock.empty();
};

ViewCollection.prototype.showAmountMovies = function() {
  $('#amount_movies').text(''+ $('.result-movie').length);
};

ViewCollection.prototype.addElements = function(arrMovies, elem) {
  if (elem.id === 'search_form' && arrMovies.length === 0) {
    $('#empty_result_text').text('Ничего не найдено!');
    $('#empty_result').css('display', 'block');
    return;
  }
  let block = this.resultBlock
  ;
  jQuery.each(arrMovies, function(index, movie) {
    let container = $('<div>', {class: 'result-movie'}).appendTo(block);
    $('<span>', {text: ''+ movie.name}).appendTo(container);
    $('<button>', {class: 'result-movie-button', id: 'result_button_'+ movie.id, text: 'Подробнее'}).appendTo(container);
  });
};

ViewCollection.prototype.closeModalWindow = function() {
  $('#empty_result').css('display', 'none');
};

ViewCollection.prototype.visibleMainBlocks = function(show) {
  let displayValue = 'none'
  ;
  if (show) {
    displayValue = 'block';
  }
  jQuery.each(['search', 'filter', 'chosen_movies'], function(index, item) {
    $('#'+ item).css('display', ''+ displayValue);
  });
};

ViewCollection.prototype.appendMovieObjOnPage = function(obj) {
  let moviePage = $('#movie_info'),
  container,
  textBlock,
  string
  ;
  $('<button>', {class: 'info_return-button', id: 'return_button', text: 'Продолжить поиск'}).appendTo(moviePage);
  container = $('<div>', {class: 'info-data'}).appendTo(moviePage);
  $('<img>', {class: 'info-data_banner', src: ''+ obj['linkImage'], alt: 'Banner'}).appendTo(container);
  textBlock = $('<div>', {class: 'info-data-text'}).appendTo(container);

  for (let prop in obj) {
    if (prop !== 'linkImage') {
      string = $('<div>', {class: 'info-data-text-string'}).appendTo(textBlock);
      $('<p>', {class: 'info-data-text-string_view info-data-text-string_title', text: obj[prop][0]}).appendTo(string);
      $('<p>', {class: 'info-data-text-string_view info-data-text-string_content', text: obj[prop][1]}).appendTo(string);
    }
  }

  moviePage.css('display', 'block');
};

export default ViewCollection;
