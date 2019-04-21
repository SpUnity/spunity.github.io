import Cookies from 'js-cookie';

class AppService {
	constructor() {}

	async getFriendsListData() {
		let token = Cookies.get('access_token'),
			data = await $.ajax({
				url: `https://api.vk.com/method/friends.get?fields=photo_100&access_token=${token}&v=5.52`,
				type: 'GET',
				dataType: 'JSONP'
			});
		return data.response ? data.response.items : false;
	}

	async getFriendPhotos(userId) {
		let token = Cookies.get('access_token'),
			data = await $.ajax({
				url: `https://api.vk.com/method/photos.get?owner_id=${userId}&album_id=profile&access_token=${token}&v=5.52`,
				type: 'GET',
				dataType: 'JSONP'
			});
		return data.response ? data.response.items : false;
	}

	toDataURL(url, callback) {
		let xhr = new XMLHttpRequest();

		xhr.onload = function() {
			let reader = new FileReader();

			reader.onloadend = function() {
				callback(reader.result);
			};
			reader.readAsDataURL(xhr.response);
		};

		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}
}


export default AppService;
