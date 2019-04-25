import StartPageService from '../services/start-page-service';
import StartPageView from '../views/start-page-view';
import StartPageHelper from '../helpers/start-page-helper';
import PhotosController from './photos-controller';


async function StartPageController() {
  const service = new StartPageService();
  const view = new StartPageView();
  const helper = new StartPageHelper();

  await createFriendsList();

  $('#friends_list').click(async (event) => {
    const $targetElem = $(event.target);
    let vkDataPhoto = [];
    let transformedDataPhoto = [];

    if (helper.checkEventTarget($targetElem, 'BUTTON')) {
      return;
    }
    view.reloadPage('loading_page');
    vkDataPhoto = await service.getFriendPhotos($targetElem.data('id'));

    if (!vkDataPhoto) {
      view.reloadPage('authorization');
      return;
    }
    executePhotosController();
  });

  async function createFriendsList() {
    const authorizationPageId = 'authorization';
    const friendsListPageId = 'friends_list';

    view.reloadPage('loading_page');

    if (helper.isTokenInUrl()) {
      helper.setTokenData();
    }
    let visiblePageId = await helper.getFirstPage();

    if (visiblePageId === friendsListPageId) {
      const friendsData = await service.getFriendsListData();
      friendsData ? view.showFriendsList(friendsData) : visiblePageId = authorizationPageId;
    }
    view.reloadPage(visiblePageId);
  }
}

function executePhotosController() {
    PhotosController();
    $('#friends_list').unbind('click');
}


export default StartPageController;
