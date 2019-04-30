import 'jquery-ui/ui/widgets/draggable';
import ViewsHelper from '../helpers/views-helper';
import textConstants from '../helpers/text-constants';

class PhotosView {
  constructor() {
    this.$mainBlock = $('#main');
  }

  renderPhotosList(photos) {
    const $main = this.$mainBlock;
    const $photosList = ViewsHelper.createContainer('div', 'photo', 'photo').appendTo($main);
    const tag = 'ul';
    const className = 'photo-column';
    const $leftColumnPhotos = ViewsHelper.createContainer(tag, className, 'photo_left').appendTo($photosList);
    const $centerColumnPhotos = ViewsHelper.createContainer(tag, className, 'photo_center').appendTo($photosList);
    const $rightColumnPhotos = ViewsHelper.createContainer(tag, className, 'photo_right').appendTo($photosList);
    const arrColumns = [$leftColumnPhotos, $centerColumnPhotos, $rightColumnPhotos];
    let counterPhotos = 0;

    addHeader();

    photos.forEach((photo) => {
      const parent = arrColumns[counterPhotos];
      const liClassName = 'photo-column-item';
      const li = ViewsHelper.createContainer('li', liClassName).appendTo(parent);

      $('<img>', {
        class: `${liClassName}_image`,
        src: photo,
        alt: 'Photo',
      }).appendTo(li);

      counterPhotos += 1;

      if (counterPhotos > 2) {
        counterPhotos = 0;
      }
    });
  }
}

function addHeader() {
  const headerText = textConstants.ru.photosPage.header || '';
  const buttonText = textConstants.ru.commonButtons.toFriendsList || '';
  const $header = $('#header');
  $('<h1>', {
    id: 'header_title',
    text: headerText,
  }).appendTo($header);
  const $navigation = ViewsHelper.createContainer('nav', 'navigation').appendTo($header);

  ViewsHelper.appendButton('navigation_button', 'to_friend_list', buttonText, $navigation);
}

export default PhotosView;
