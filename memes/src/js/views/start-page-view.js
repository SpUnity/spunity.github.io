import 'jquery-ui/ui/widgets/draggable';

class StartPageView {
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
    this.friendsListId = 'friends_list';
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

  showFriendsList(data) {
    const friendsListPageId = this.friendsListId;
    const itemClassName = 'friends-item';

    data.forEach((item) => {
      const li = $('<li>', { class: `${itemClassName}` }).appendTo(`#${friendsListPageId}`);

      $('<img>', {
        class: `${itemClassName}_photo`,
        src: `${item.photo_100}`,
        alt: 'selfie',
      }).appendTo(li);

      $('<span>', {
        class: `${itemClassName}_name`,
        text: `${item.first_name} ${item.last_name}`,
      }).appendTo(li);

      const btn = $('<button>', {
        class: `${itemClassName}_button`,
        text: 'Выбрать фото',
        type: 'button',
      }).appendTo(li);

      btn.data('id', `${item.id}`);
    });
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

export default StartPageView;
