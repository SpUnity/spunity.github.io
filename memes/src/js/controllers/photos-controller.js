import PhotosView from '../views/photos-view';
import HelperCommon from '../helpers/helper-common';
import PhotosModel from '../models/photos-model';
import StartPageController from './start-page-controller';
import EditorController from './editor-controller';
import ViewCommon from '../views/view-common';

async function PhotosController(photoData) {
  const view = new PhotosView();
  const viewCommon = new ViewCommon();
  const helperCommon = new HelperCommon();
  const transformedDataPhoto = PhotosModel.transformArrayPhotos(photoData);

  await view.renderPhotosList(transformedDataPhoto);
  viewCommon.removeLoadingPage();

  $('#photo').click((event) => {
    const $targetElem = $(event.target);

    if (helperCommon.checkEventTarget($targetElem, 'IMG')) {
      return;
    }
    executeOtherController($targetElem.attr('src'));
  });

  $('#to_friend_list').click(() => {
    executeOtherController();
  });

  function executeOtherController(data) {
    viewCommon.renderLoadingPage();
    $('*').unbind();
    viewCommon.removeThisPage();
    data ? EditorController(data) : StartPageController();
  }
}

export default PhotosController;
