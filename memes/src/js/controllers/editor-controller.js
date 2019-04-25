import EditorService from '../services/editor-service';
import EditorView from '../views/editor-view';
import EditorModel from '../models/editor-model';
import EditorHelper from '../helpers/editor-helper';
import PhotosController from './photos-controller';
import StartPageController from './start-page-controller';

async function EditorController() {
  const service = new EditorService();
  const view = new EditorView();
  const model = new EditorModel();
  const helper = new EditorHelper();

  view.doBlocksDraggable();
  service.toDataURL($targetElem.attr('src'), view.showEditPage);
  view.reloadPage('edit_page', 'to_friend_list', 'to_photo_list', 'hide_side_bars');


  $('#to_friend_list').click(() => {
    executeStartPageController();
    view.removePhotos();
  });

  $('#to_photo_list').click(() => {
    executePhotosController();
  });

  $('#hide_side_bars').click(() => {
    view.ruleSideBars();
  });

  $('#edit_page').click((event) => {
    const stringCodes = $(event.target).data().code;

    if (!stringCodes) {
      return;
    }
    const changingData = model.transformDataCode(stringCodes);
    view.changeElem(changingData);
  });

  $('#user_text_top_field').on('input', () => {
    const userText = $(this).val();
    const $elemForInsert = $('#center_text_top');

    view.insertText(userText, $elemForInsert);
  });

  $('#user_text_bottom_field').on('input', () => {
    const userText = $(this).val();
    const $elemForInsert = $('#center_text_bottom');

    view.insertText(userText, $elemForInsert);
  });

  $('#create_meme').click(() => {
    helper.getImage();
  });
}

function executeStartPageController() {
    StartPageController();
    deleteHandlers();
    $('#to_friend_list').unbind('click');
}

function executePhotosController() {
    PhotosController();
    deleteHandlers();
}

function deleteHandlers() {
    $('#to_photo_list').unbind('click');
    $('#hide_side_bars').unbind('click');
    $('#edit_page').unbind('click');
    $('#user_text_top_field').unbind('click');
    $('#user_text_bottom_field').unbind('click');
    $('#create_meme').unbind('click');
}


export default EditorController;
