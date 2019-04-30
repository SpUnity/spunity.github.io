import 'jquery-ui/ui/widgets/draggable';
import ViewsHelper from '../helpers/views-helper';
import textConstants from '../helpers/text-constants';

class StartPageView {
  constructor() {
    this.$mainBlock = $('#main');
  }

  renderFriendsList(data) {
    const $main = this.$mainBlock;
    const headerText = textConstants.ru.startPage.headers.friendsList || '';
    const buttonText = textConstants.ru.startPage.buttons.chosePhoto || '';
    const itemClassName = 'friends-item';
    const $friensPage = ViewsHelper.createContainer('ul', 'friends', 'friends_list');

    $friensPage.appendTo($main);

    data.forEach((item) => {
      const $li = $('<li>', { class: `${itemClassName}` }).appendTo($friensPage);

      $('<img>', {
        class: `${itemClassName}_photo`,
        src: `${item.photo_100}`,
        alt: 'selfie',
      }).appendTo($li);

      $('<span>', {
        class: `${itemClassName}_name`,
        text: `${item.first_name} ${item.last_name}`,
      }).appendTo($li);

      ViewsHelper.appendButton(`${itemClassName}_button`, `${item.id}`, buttonText, $li);
    });

    addHeader(headerText);
  }

  renderAuthorization() {
    const $main = this.$mainBlock;
    const headerText = textConstants.ru.startPage.headers.authorization || '';
    const buttonText = textConstants.ru.startPage.buttons.logIn || '';
    const url = 'https://oauth.vk.com/authorize?client_id=6939727&display=page&redirect_uri=https://spunity.github.io/memes/&scope=friends&response_type=token&v=5.95&state=123456';
    const $container = ViewsHelper.createContainer('div', 'authorization', 'authorization');
    const $linkBlock = ViewsHelper.createContainer('div', 'authorization-link-block');
    const $link = $('<a>', {
      href: url,
    });

    $container.appendTo($main);

    $('<img>', {
      class: 'authorization_logo',
      src: './images/logo.png',
      alt: 'Logo',
    }).appendTo($container);

    $linkBlock.appendTo($container);
    $link.appendTo($linkBlock);
    ViewsHelper.appendButton('authorization_button', 'authorization_button', buttonText, $link);

    addHeader(headerText);
  }
}

function addHeader(title) {
  const $header = $('#header');
  $('<h1>', {
    id: 'header_title',
    text: title,
  }).appendTo($header);
}

export default StartPageView;
