import 'jquery-ui/ui/widgets/draggable';

class EditorView {
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
    this.showingSideBars = {
      switch: true,
      showText: 'Показать сайдбары',
      hideText: 'Спрятать сайдбары',
    };
    this.centerImages = [
      'center_moustache',
      'center_glasses',
      'center_hat',
    ];
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

  showEditPage(url) {
    $('#editing_photo').attr('src', url);
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

  ruleSideBars() {
    const $leftColumnId = $('#editor_left_column');
    const $centerColumnId = $('#editor_center_column');
    const $rightColumnId = $('#editor_right_column');
    const $buttonHideId = $('#hide_side_bars');
    const wideCenter = '100%';
    const narrowCenter = '40%';
    const obj = this.showingSideBars;
    let widthCenter = '';
    let showingText = '';
    obj.switch = !obj.switch;
    widthCenter = obj.switch ? narrowCenter : wideCenter;
    showingText = obj.switch ? obj.hideText : obj.showText;

    slideElems([$rightColumnId, $leftColumnId], obj.switch);
    $centerColumnId.css('width', widthCenter);
    $buttonHideId.text(showingText);
  }

  changeElem(changingData) {
    const { funcNumber } = changingData;
    const data = changingData.dataForChangig;
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
      default:
        return null;
    }
  }

  insertText(text, $elem) {
    $elem.text(text);
  }

  doBlocksDraggable() {
    const centerImagesArr = [...this.centerImages];

    centerImagesArr.forEach((id) => {
      $(`#${id}`).draggable();
    });
  }
}

function slideElems(elemArr, showSideBars) {
  const positionColumns = showSideBars ? '0' : false;
  const signTransformRight = '';
  const signTransformLeft = '-';
  elemArr.forEach((elem, index) => {
    const sign = index === 0 ? signTransformRight : signTransformLeft;
    const widthElem = positionColumns || elem.width();

    elem.css('transform', `translateX(${sign}${+widthElem}px)`);
  });
}

function changeTextSize(arr) {
  // ['side_text_top', 'center_text_top', 'add']
  const [sideBarId, resultId, typeAction] = arr;
  const currentSizePixels = $(`#${resultId}`).css('font-size');
  const currentSizeNumber = parseInt(currentSizePixels, 10);
  const valueOfChange = 2;
  let newSizeNumber = 20;

  if (typeAction === 'add') {
    newSizeNumber = currentSizeNumber + valueOfChange;
  } else {
    newSizeNumber = currentSizeNumber - valueOfChange;
  }

  if (!isCorrectNumber(newSizeNumber, 100, 20)) {
    return;
  }
  $(`#${resultId}`).css('font-size', `${newSizeNumber}px`);
  $(`#${sideBarId}`).text(`${newSizeNumber}`);
}

function changeTextColor(arr) {
  // ['side_text_top', 'center_text_top', 'dark']
  const [, resultId, colorTheme] = arr;
  const darkColor = '#333';
  const lightColor = '#fff';
  const textColor = colorTheme === 'dark' ? darkColor : lightColor;

  $(`#${resultId}`).css('color', `${textColor}`);
}

function changeImageSize(arr) {
  // ['center_dark_moustache', 'center_light_moustache', 'image_moustache', 'add']
  const [darkImageId, , visibleImageId, typeAction] = arr;
  const currentWidth = $(`#${darkImageId}`).width();
  const valueOfChange = 20;
  let newWidth = 20;

  if (typeAction === 'add') {
    newWidth = currentWidth + valueOfChange;
  } else {
    newWidth = currentWidth - valueOfChange;
  }

  if (!isCorrectNumber(newWidth, 300, 0)) {
    return;
  }

  $(`#${visibleImageId}`).text(`${newWidth}`);

  arr.forEach((id) => {
    $(`#${id}`).css('width', `${newWidth}px`);
    $(`#${id}`).css('height', `${newWidth}px`);
  });
}

function changeImageColor(arr) {
  const [darkImageId, lighImagetId, , colorTheme] = arr;
  const visibleDisplay = 'block';
  const invisibleDisplay = 'none';
  let darkValueDisplay = invisibleDisplay;
  let lightValueDisplay = visibleDisplay;
  if (colorTheme === 'dark') {
    darkValueDisplay = visibleDisplay;
    lightValueDisplay = invisibleDisplay;
  }

  $(`#${darkImageId}`).css('display', `${darkValueDisplay}`);
  $(`#${lighImagetId}`).css('display', `${lightValueDisplay}`);
}

function showDivWithVisualEffect(arr) {
  const [elemId, switchId] = arr;
  const displayText = 'block';
  const hideText = 'none';
  const textDisplayValue = $(`#${switchId}`).prop('checked') ? displayText : hideText;

  $(`#${elemId}`).css('display', textDisplayValue);
}

function isCorrectNumber(num, max, min) {
  return num < max && num > min;
}


export default EditorView;
