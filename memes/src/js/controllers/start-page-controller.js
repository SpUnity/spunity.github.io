import ServiceVkAPI from '../services/service-vk-api';
import StartPageView from '../views/start-page-view';
import StartPageHelper from '../helpers/start-page-helper';
import PhotosController from './photos-controller';
import ViewCommon from '../views/view-common';
import HelperCommon from '../helpers/helper-common';




async function StartPageController() {
  const service = new ServiceVkAPI();
  const view = new StartPageView();
  const helper = new StartPageHelper();
  const viewCommon = new ViewCommon();
  const helperCommon = new HelperCommon();

  if ( !$( `#loading_page` ) ) {
      viewCommon.renderLoadingPage();
  }
  await createFriendsList();

  if ($('#friends_list')) {
    $('#friends_list').click(async (event) => {
      const $targetElem = $(event.target);
      let vkDataPhoto = [];

      if (helperCommon.checkEventTarget($targetElem, 'BUTTON')) {
        return;
      }
      viewCommon.renderLoadingPage();
      vkDataPhoto = await service.getFriendPhotos($targetElem.attr('id'));

      if (!vkDataPhoto) {
        view.renderAuthorization();
        viewCommon.removeLoadingPage();
        return;
      }
      executePhotosController(vkDataPhoto);
    });
  }

  async function createFriendsList() {
    if (helper.isTokenInUrl() || helper.findGoodToken()) {
      const friendsData = await service.getFriendsListData();

      if (friendsData) {
        view.renderFriendsList(friendsData);
        viewCommon.removeLoadingPage();
        return;
      }
    }

    view.renderAuthorization();
    viewCommon.removeLoadingPage();
  }

  function executePhotosController(photoData) {
    $('*').unbind();
    viewCommon.removeThisPage();
    PhotosController(photoData);
  }
}

export default StartPageController;
