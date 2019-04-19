import AppService from '../service/app-service';
import AppView from '../view/app-view';
import AppModel from '../model/app-model';
import AppHelper from '../helpers/app-helper';

async function AppController() {
	const service = new AppService(),
		view = new AppView(),
		model = new AppModel(),
		helper = new AppHelper();
		let friendsData = [];

	if (helper.isTokenInUrl()) {
		helper.setTokenData();
		await createFriendsList();
		view.reloadPage(['friends_list'], []);
	} else {
		let visiblePage = await helper.getFirstPage();
		await createFriendsList(visiblePage);
		view.reloadPage(visiblePage, []);
	}

	view.doBlocksDraggable();

	$('#friends_list').click(async function(event) {
		const $targetElem = $(event.target);

		if (helper.checkEventTarget($targetElem, 'BUTTON')) {
			return
		}

		let vkDataPhoto = [],
			transformedDataPhoto = [];

		vkDataPhoto = await service.getFriendPhotos($targetElem.data('id'));
		transformedDataPhoto = model.transformArrayPhotos(vkDataPhoto);
		view.showPhotoList(transformedDataPhoto);

		view.reloadPage(['photo', 'to_friend_list'], ['friends_list']);
	});

	$('#photo').click(function(event) {
		const $targetElem = $(event.target);

		if (helper.checkEventTarget($targetElem, 'IMG')) {
			return
		}

		view.showEditPage($targetElem.attr('src'));

		view.reloadPage(['edit_page', 'to_photo_list', 'hide_side_bars'], ['photo']);
	});

	$('#to_friend_list').click(function() {
		view.reloadPage(['friends_list'], ['edit_page', 'photo', 'to_friend_list', 'to_photo_list', 'hide_side_bars']);
		view.removePhotos();
	});

	$('#to_photo_list').click(function() {
		view.reloadPage(['photo'], ['edit_page', 'to_photo_list', 'hide_side_bars']);
	});

	$('#hide_side_bars').click(function() {
		view.ruleSideBars();
	});

	$('#edit_page').click(function(event) {
		let stringCodes = $(event.target).data().code,
			changingData;

		if (!stringCodes) {
			return;
		}

		changingData = model.transformDataCode(stringCodes);
		view.changeElem(changingData);
	});

	$(`#user_text_top_field`).on('input', function() {
		let userText = $(this).val(),
			$elemForInsert = $(`#center_text_top`);
		view.insertText(userText, $elemForInsert);
	})

	$(`#user_text_bottom_field`).on('input', function() {
		let userText = $(this).val(),
			$elemForInsert = $(`#center_text_bottom`);
		view.insertText(userText, $elemForInsert);
	})

	$( `#create_meme` ).click(function() {
		helper.getImage();
	});

	async function createFriendsList(argument) {
		if (!!argument && argument[0] === 'authorization') {
			return;
		}

		friendsData = await service.getFriendsListData();
		view.showFriendsList(friendsData);
	}
}


export default AppController;
