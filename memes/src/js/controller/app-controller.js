import AppService from '../service/app-service';
import AppView from '../view/app-view';
import AppModel from '../model/app-model';
import AppHelper from '../helper/app-helper';

async function AppController() {
  const service = new AppService();
  const view = new AppView();
  const model = new AppModel();
  const helper = new AppHelper();

  await createFriendsList();
  view.doBlocksDraggable();

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
    transformedDataPhoto = model.transformArrayPhotos(vkDataPhoto);
    view.showPhotoList(transformedDataPhoto);
    view.reloadPage('photo', 'to_friend_list');
  });

  $('#photo').click((event) => {
    const $targetElem = $(event.target);

    if (helper.checkEventTarget($targetElem, 'IMG')) {
      return;
    }
    service.toDataURL($targetElem.attr('src'), view.showEditPage);
    view.reloadPage('edit_page', 'to_friend_list', 'to_photo_list', 'hide_side_bars');
  });

  $('#to_friend_list').click(() => {
    view.reloadPage('friends_list');
    view.removePhotos();
  });

  $('#to_photo_list').click(() => {
    view.reloadPage('photo', 'to_friend_list');
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


export default AppController;
