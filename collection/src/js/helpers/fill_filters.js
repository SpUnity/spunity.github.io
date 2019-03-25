function fillFilters(keysObj) {
  let objGenre = keysObj['genre'],
  objCountry = keysObj['country']
  ;

  for (var key in objGenre) {
    $('<button>', {class: 'filter-button', id: 'button_genre_' + key, text: '' + objGenre[key]}).appendTo('#filter_genre');
  }
  for (var key in objCountry) {
    $('<button>', {class: 'filter-button', id: 'button_country_' + key, text: '' + objCountry[key]}).appendTo('#filter_country');
  }
}

export default fillFilters;
