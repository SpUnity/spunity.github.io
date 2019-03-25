import isButtonSelected from './check_button';

function filterMovies(movie) {
  let rightMovie = true;

  if (isButtonSelected(['button_year'])) {
    rightMovie = isButtonSelected(['year_before']) && movie.year < 2000 ||
    isButtonSelected(['year_after']) && movie.year >= 2000;
  }

  if (isButtonSelected(['button_genre']) && rightMovie) {
    let arr = movie.genreId;

    rightMovie = false;

    jQuery.each(arr, function(index, item) {
      if (isButtonSelected(['button_genre_'+ item])) {
        rightMovie = true;
      }
    });
  }

  if (isButtonSelected(['button_country']) && rightMovie) {
    let arr = movie.countryId;

    rightMovie = false;

    jQuery.each(arr, function(index, item) {
      if (isButtonSelected(['button_country_'+ item])) {
        rightMovie = true;
      }
    });
  }

  return rightMovie;
}

export default filterMovies;
