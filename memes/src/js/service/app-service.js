import Cookies from 'js-cookie';

class AppService {
	constructor() {}

	getFriendsListData(authorizationCallback) {
		let token = Cookies.get('access_token');
		return $.ajax({
			url: `https://api.vk.com/method/friends.get?fields=photo_100&access_token=${token}&v=5.52`,
			type: 'GET',
			dataType: 'JSONP'
		})
		.done(function(data) {
			if (data.error) {
				console.log(err);
				authorizationCallback(['authorization'], []);
				return { response: { items: [] } };
			}
			return data.response.items;
		})
	}

	getFriendPhotos( userId ) {
		let token = Cookies.get('access_token');

		return $.ajax({
			url: `https://api.vk.com/method/photos.get?owner_id=${userId}&album_id=profile&access_token=${token}&v=5.52`,
			type: 'GET',
			dataType: 'JSONP'
		})
		.done(function(data) {
			return data.response.items;
		})
		.fail(function(err) {
			console.log(err);
		})
	}
}


export default AppService;
