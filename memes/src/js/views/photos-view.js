import 'jquery-ui/ui/widgets/draggable';

class PhotosView {
  constructor() {
    this.keysObj = {
      to_friend_list: false,
      to_photo_list: false,
      hide_side_bars: false,
      authorization: false,
      friends_list: false,
      photo: false,
      edit_page: false,
      loading_page: false,
    };
    this.displayFlex = 'flex';
    this.displayNone = 'none';
  }

  reloadPage(...elemsOn) {
    const objPages = {
      ...this.keysObj,
    };

    for (const key in objPages) {
      if (Object.prototype.hasOwnProperty.call(objPages, key)) {
        objPages[key] = elemsOn.includes(key);
      }
    }

    this.changeHeaderText(objPages);
    this.renderPage(objPages);
  }

  renderPage(objPages) {
    const isVisible = this.displayFlex;
    const isInvisible = this.displayNone;

    for (const key in objPages) {
      if (Object.prototype.hasOwnProperty.call(objPages, key)) {
        const valueDisplay = objPages[key] ? isVisible : isInvisible;

        $(`#${key}`).css('display', valueDisplay);
      }
    }
  }

  showPhotoList(photos) {
    const liClass = 'photo-column-item';
    const firstPartId = '#photo_';
    const arrDivs = [$(`${firstPartId}left`), $(`${firstPartId}center`), $(`${firstPartId}right`)];
    let counterPhotos = 0;
    photos.forEach((photo) => {
      const parent = arrDivs[counterPhotos];
      const li = $('<li>', {
        class: liClass,
      }).appendTo(parent);

      $('<img>', {
        class: `${liClass}_image`,
        src: photo,
        alt: 'Photo',
      }).appendTo(li);

      counterPhotos += 1;

      if (counterPhotos > 2) {
        counterPhotos = 0;
      }
    });
  }

  removePhotos() {
    $('#photo li').remove();
  }

  changeHeaderText(objPages) {
    const $title = $('#header_title');
    const isShownPage = true;
    let value = '';

    switch (isShownPage) {
      case objPages.friends_list:
        value = 'Список Ваших друзей';
        break;
      case objPages.photo:
        value = 'Список Фото Вашего друга';
        break;
      case objPages.edit_page:
        value = 'Создание мема';
        break;
      case objPages.authorization:
        value = 'Добро Пожаловать';
        break;
      default:
        value = 'Добро Пожаловать';
    }

    $title.text(value);
  }
}

export default PhotosView;
