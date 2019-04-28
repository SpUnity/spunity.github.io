import 'jquery-ui/ui/widgets/draggable';

class PhotosView {
  constructor() {
    this.$mainBlock = $('#main');
  }

  renderPhotosList(photos) {
    const $main = this.$mainBlock;
    const $photosList = createContainer('div', 'photo', 'photo').appendTo($main);
    const tag = 'ul';
    const className = 'photo-column';
    const $leftColumnPhotos = createContainer(tag, className, 'photo_left').appendTo($photosList);
    const $centerColumnPhotos = createContainer(tag, className, 'photo_center').appendTo($photosList);
    const $rightColumnPhotos = createContainer(tag, className, 'photo_right').appendTo($photosList);
    const arrColumns = [$leftColumnPhotos, $centerColumnPhotos, $rightColumnPhotos];
    let counterPhotos = 0;

    addHeader();

    photos.forEach((photo) => {
      const parent = arrColumns[counterPhotos];
      const liClassName = 'photo-column-item';
      const li = createContainer('li', liClassName).appendTo(parent);

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
  const $header = $('#header');
  $('<h1>', {
    id: 'header_title',
    text: 'Список Фото Вашего друга',
  }).appendTo($header);
  const $navigation = createContainer('nav', 'navigation').appendTo($header);

  appendButton('navigation_button', 'to_friend_list', 'К списку друзей', $navigation);
}

function appendButton(className, id, text, parent) {
  return $('<button>', {
    class: className,
    id,
    type: 'button',
    text,
  }).appendTo(parent);
}

function createContainer(tag, className, id) {
  return $(`<${tag}>`, {
    class: className || null,
    id: id || null,
  });
}

export default PhotosView;
