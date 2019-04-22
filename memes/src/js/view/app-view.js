import 'jquery-ui/ui/widgets/draggable';

class AppView {
	constructor() {
		this.keysObj = {
			to_friend_list: false,
			to_photo_list: false,
			hide_side_bars: false,
			authorization: false,
			friends_list: false,
			photo: false,
			edit_page: false,
			loading_page: false
		};
		this.showingSideBars = {
			switch: true,
			showText: 'Показать сайдбары',
			hideText: 'Спрятать сайдбары'
		};
	}

	reloadPage(elemsOn) {
		const objPages = {...this.keysObj};

		for (let key in objPages) {
			objPages[key] = elemsOn.includes(key);
		}

		this.changeHeaderText(objPages);
		this.renderPage(objPages);
	}

	renderPage(objPages) {
		for (let key in objPages) {
			let value = objPages[key] ? 'flex' : 'none';

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
			counter = 0
			;
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

	changeHeaderText(objPages) {
		const $title = $('#header_title');
		let value = '';

		switch (true) {
			case objPages['friends_list']:
				value = 'Список Ваших друзей';
				break;
			case objPages['photo']:
				value = 'Список Фото Вашего друга';
				break;
			case objPages['edit_page']:
				value = 'Создание мема';
				break;
			case objPages['authorization']:
				value = 'Добро Пожаловать';
				break;
		}

		$title.text(value);
	}

	ruleSideBars() {
		let obj = this.showingSideBars;

		obj.switch = !obj.switch;

		if (obj.switch) {
			slideElems([$('#editor_right_column'), $('#editor_left_column')], true);
			$('#editor_center_column').css('width', '40%');
			$('#hide_side_bars').text(obj.hideText);
		} else {
			slideElems([$('#editor_right_column'), $('#editor_left_column')], false);
			$('#editor_center_column').css('width', '100%');
			$('#hide_side_bars').text(obj.showText);
		}
	}

	changeElem(changingData) {
		let funcNumber = changingData.funcNumber,
			data = changingData.dataForChangig;
		switch (funcNumber) {
			case 0:
				changeTextSize(data);
				break;
			case 1:
				changeTextColor(data);
				break;
			case 2:
				changeImageSize(data);
				break;
			case 3:
				changeImageColor(data);
				break;
			case 4:
				showDivWithVisualEffect(data);
				break;
		}
	}

	insertText(text, $elem) {
		$elem.text(text);
	}

	doBlocksDraggable() {
		['center_moustache', 'center_glasses', 'center_hat'].forEach((id) => {
			$(`#${id}`).draggable();
		})
	}
}

function slideElems(elemArr, booleanValue) {
	let showElems = booleanValue ? '0' : null;

	elemArr.forEach((elem, index) => {
		let sign = !(index % 2) || index === 0 ? '' : '-',
			widthElem = showElems || elem.width();

		elem.css('transform', `translateX(${sign}${+widthElem}px)`)
	})
}

function changeTextSize(arr) {
	// ['side_text_top', 'center_text_top', 'add']
	let [sideBarId, resultId, typeAction] = arr,
	currentSizePixels = $(`#${resultId}`).css('font-size'),
		currentSizeNumber = parseInt(currentSizePixels, 10);

	currentSizeNumber += typeAction === 'add' ? 2 : (-2);
	if (currentSizeNumber > 100 && currentSizeNumber < 20) {
		return;
	}

	$(`#${resultId}`).css("font-size", `${currentSizeNumber}px`);
	$(`#${sideBarId}`).text(`${currentSizeNumber}`);
}

function changeTextColor(arr) {
	// ['side_text_top', 'center_text_top', 'dark']
	let [sideBarId, resultId, typeAction] = arr,
	textColor
	;

	textColor = typeAction === 'dark' ? '#333' : '#fff';

	$(`#${resultId}`).css("color", `${textColor}`);
}

function changeImageSize(arr) {
	// ['center_dark_moustache', 'center_light_moustache', 'image_moustache', 'add']
	let typeAction = arr.splice(3)[0],
		visibleSizeId = arr.splice(2)[0],
		currentWidth = $(`#${arr[0]}`).width();

	currentWidth += typeAction === 'add' ? 20 : (-20);

	if (currentWidth <= 0 || currentWidth > 300) {
		return;
	}

	$(`#${visibleSizeId}`).text(`${currentWidth}`);

	arr.forEach((id) => {
		$(`#${id}`).css("width", `${currentWidth}px`);
		$(`#${id}`).css("height", `${currentWidth}px`);
	})
}

function changeImageColor(arr) {
	let [darkId, lightId, imageSize, showingColor] = arr,
	darkValue = 'none',
		lightValue = 'none';

	showingColor === 'dark' ? darkValue = 'block' : lightValue = 'block';

	$(`#${darkId}`).css("display", `${darkValue}`);
	$(`#${lightId}`).css("display", `${lightValue}`);
}

function showDivWithVisualEffect(arr) {
	let idElem = arr[0],
		idSwitch = arr[1],
		displayText = 'none';

	displayText = $(`#${idSwitch}`).prop('checked') ? 'block' : 'none';
	$(`#${idElem}`).css('display', `${displayText}`);
}


export default AppView;
