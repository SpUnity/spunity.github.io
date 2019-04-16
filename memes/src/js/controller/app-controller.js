import AppService from '../service/app-service';
import AppView from '../view/app-view';
import AppModel from '../model/app-model';
import AppHelper from '../helpers/app-helper';

function AppController() {
    const service = new AppService(),
        view = new AppView(),
        model = new AppModel(),
        helper = new AppHelper(),
        friendsData = service.getFriendsListData();

    view.showFriendsList(friendsData);
	view.renderPage();

    $('#friends_list').click(function(event) {
		const $targetElem = $(event.target);

		if (helper.checkEventTarget($targetElem, 'BUTTON')) {return}

		let vkDataPhoto = [],
            transformedDataPhoto = [];

        vkDataPhoto = service.getFriendPhotos($targetElem.data('id'));
        transformedDataPhoto = model.transformArrayPhotos(vkDataPhoto);
        view.showPhotoList(transformedDataPhoto);

		view.reloadPage(['photo', 'to_friend_list'], ['friends_list']);
    });

	$('#photo').click(function(event) {
		const $targetElem = $(event.target);

		if (helper.checkEventTarget($targetElem, 'IMG')) {return}

		view.showEditPage($targetElem.attr('src'));

		view.reloadPage(['edit_page', 'to_photo_list', 'hide_side_bars'], ['photo']);
	});

	$('#to_friend_list').click(function() {
		view.reloadPage(['friends_list'], ['edit_page', 'photo', 'to_friend_list', 'to_photo_list', 'hide_side_bars']);
		view.removePhotos();
	});
}

export default AppController;
