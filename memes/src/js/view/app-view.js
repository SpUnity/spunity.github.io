class AppView {
	constructor() {
		this.keysObj = {
			to_friend_list: false,
			to_photo_list: false,
			hide_side_bars: false,
			friends_list: true,
			photo: false,
			edit_page: false
		}
	}

	reloadPage(elemsOn, elemsOff) {
		elemsOn.forEach((key) => {
			this.keysObj[key] = true
		});
		elemsOff.forEach((key) => {
			this.keysObj[key] = false
		})

		this.changeHeaderText();
		this.renderPage();
	}

	renderPage() {
		let obj = this.keysObj;

		for (let key in obj) {
			let value = obj[key] ? 'flex' : 'none';

			$(`#${key}`).css('display', value);
		}
	}

	showFriendsList(data) {
		data.forEach((item) => {
			let li = $('<li>', {
					class: 'friends-item'
				}).appendTo('#friends_list'),
				nameClass = 'friends-item_',
				btn;
			$('<img>', {
				class: `${nameClass}photo`,
				src: `${item.photo_100}`,
				alt: 'selfie'
			}).appendTo(li);
			$('<span>', {
				class: `${nameClass}name`,
				text: `${item.first_name} ${item.last_name}`
			}).appendTo(li);
			btn = $('<button>', {
				class: `${nameClass}button`,
				text: 'Выбрать фото',
				type: 'button'
			}).appendTo(li);
			btn.data('id', `${item.id}`);
		})
	}

	showPhotoList(photos) {
		let liClass = 'photo-column-item',
			firstPartId = '#photo_',
			arrDivs = [$(`${firstPartId}left`), $(`${firstPartId}center`), $(`${firstPartId}right`)],
			counter = 0;
		photos.forEach((photo) => {
			let parent = arrDivs[counter],
				li = $('<li>', {
					class: liClass
				}).appendTo(parent);
			$('<img>', {
				class: `${liClass}_image`,
				src: photo,
				alt: 'Photo'
			}).appendTo(li);
			counter++;
			counter > 2 ? counter = 0 : null;
		})
	}

	showEditPage(url) {
		$('#editing_photo').attr('src', url);
	}

	removePhotos() {
		$('#photo li').remove();
	}

	changeHeaderText() {
		const $title = $('#header_title');
		let obj = this.keysObj,
			value = '';

		switch (true) {
			case obj['friends_list']:
				value = 'Список Ваших друзей';
				break;
			case obj['photo']:
				value = 'Список Фото Вашего друга';
				break;
			case obj['edit_page']:
				value = 'Создание мема';
				break;
		}

		$title.text(value);
	}
}


export default AppView;
