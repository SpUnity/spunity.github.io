import AppService from '../service/app-service';
import AppView from '../view/app-view';
import AppModel from '../model/app-model';
import AppHelper from '../helpers/app-helper';

async function AppController() {
	const service = new AppService(),
		view = new AppView(),
		model = new AppModel(),
		helper = new AppHelper();

	await createFriendsList();
	view.doBlocksDraggable();

	$('#friends_list').click(async function(event) {
		const $targetElem = $(event.target);
		let vkDataPhoto = [],
			transformedDataPhoto = [];

		if (helper.checkEventTarget($targetElem, 'BUTTON')) {
			return
		}
		view.reloadPage(['loading_page']);
		vkDataPhoto = await service.getFriendPhotos($targetElem.data('id'));

		if (!vkDataPhoto) {
			view.reloadPage(['authorization']);
			return;
		}
		transformedDataPhoto = model.transformArrayPhotos(vkDataPhoto);
		view.showPhotoList(transformedDataPhoto);
		view.reloadPage(['photo', 'to_friend_list']);
	});

	$('#photo').click(function(event) {
		const $targetElem = $(event.target);

		if (helper.checkEventTarget($targetElem, 'IMG')) {
			return
		}
		service.toDataURL($targetElem.attr('src'), view.showEditPage);
		view.reloadPage(['edit_page', 'to_friend_list', 'to_photo_list', 'hide_side_bars']);
	});

	$('#to_friend_list').click(function() {
		view.reloadPage(['friends_list']);
		view.removePhotos();
	});

	$('#to_photo_list').click(function() {
		view.reloadPage(['photo', 'to_friend_list']);
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

	async function createFriendsList() {
		view.reloadPage(['loading_page']);
		if (helper.isTokenInUrl()) {
			helper.setTokenData();
		}
		let visiblePage = await helper.getFirstPage();

		if (visiblePage.includes('friends_list')) {
			let friendsData = await service.getFriendsListData();
			friendsData ? view.showFriendsList(friendsData) : visiblePage = ['authorization'] ;
		}
		view.reloadPage(visiblePage);
	}
}


export default AppController;
