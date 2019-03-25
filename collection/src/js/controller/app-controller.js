import ModelCollection from '../model/app-model';
import ViewCollection from '../view/app-view';
import showError from "../helpers/show_error";

function appController() {
  let model = new ModelCollection(),
  view = new ViewCollection(),
  filteredArr = []
  ;

  try {
    model.checkData();
  }catch (e) {
    showError(false);
    console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
  }

  $('#list-checkbox').click(function() {
    filteredArr = allData;
  });

  $('#filter').click(function() {
    try {
      let elementTarget = event.target
      ;
      if (elementTarget.nodeName !== 'BUTTON') {
        return;
      }

      view.removePreviousElements();
      view.showAmountMovies();
      filteredArr = model.filterData(elementTarget) || [];
      view.addElements(filteredArr, elementTarget);
      view.showAmountMovies();
    }catch (e) {
      console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
      $('#empty_result_text').text('Извините фильтр временно не работает!');
      $('#empty_result').css('display', 'block');
    }
  });

  $('#search_form').submit(function(e) {
    try {
      let arrMovie,
          currentTarget = event.currentTarget
      ;
      e.preventDefault();
      view.removePreviousElements();
      view.showAmountMovies();
      arrMovie = model.searchMovie(filteredArr) || [];
      view.addElements(arrMovie, currentTarget);
      view.showAmountMovies();
    }catch (e) {
      console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
      $('#empty_result_text').text('Извините поиск временно не работает!');
      $('#empty_result').css('display', 'block');
    }
  });

  $('#close_empty_result').click(function() {
    view.closeModalWindow();
  });

  $('#chosen_movies').click(function() {
    try {
      let elementTarget = event.target,
          id = +elementTarget.id.slice(14),
          movieData = allData[id - 1]
      ;
      if (elementTarget.nodeName !== 'BUTTON') {
        return;
      }
      view.visibleMainBlocks(false);
      movieData = model.assembleMovieObj(movieData);
      view.appendMovieObjOnPage(movieData);
    }catch (e) {
      console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
      $('#empty_result_text').text('Извините эта информация временно не доступна!');
      $('#empty_result').css('display', 'block');
    }

    $('#return_button').click(function() {
      $('#movie_info').empty();
      view.visibleMainBlocks(true);
    });
  });
}

export default appController;
