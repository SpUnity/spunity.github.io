import PhotosView from '../views/photos-view';
import PhotosHelper from '../helpers/photos-helper';
import PhotosModel from '../models/photos-model';
import StartPageController from './start-page-controller';
import EditorController from './editor-controller';

async function PhotosController() {
  const view = new PhotosView();
  const model = new PhotosModel();
  const helper = new PhotosHelper();

  transformedDataPhoto = model.transformArrayPhotos(vkDataPhoto);
  view.showPhotoList(transformedDataPhoto);
  view.reloadPage('photo', 'to_friend_list');


  $('#photo').click((event) => {
    const $targetElem = $(event.target);

    if (helper.checkEventTarget($targetElem, 'IMG')) {
      return;
    }
   executeEditorController();
  });

  $('#to_friend_list').click(() => {
    executeStartPageController();
    view.removePhotos();
  });
}

function executeStartPageController() {
    StartPageController();
    $('#to_friend_list').unbind('click');
    $('#photo').unbind('click');
}

function executeEditorController() {
    EditorController();
    $('#to_friend_list').unbind('click');
    $('#photo').unbind('click');
}

export default PhotosController;
