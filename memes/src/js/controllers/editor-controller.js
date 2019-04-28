import ServiceVkAPI from '../services/service-vk-api';
import EditorView from '../views/editor-view';
import EditorHelper from '../helpers/editor-helper';
import StartPageController from './start-page-controller';
import ViewCommon from '../views/view-common';

async function EditorController(imageSrc) {
  const service = new ServiceVkAPI();
  const view = new EditorView();
  const viewCommon = new ViewCommon();
  const helper = new EditorHelper();

  await service.toDataURL(imageSrc, view.addSrcToPhoto);
  await view.renderEditorPage();
  viewCommon.removeLoadingPage();

  $('#to_friend_list').click(() => {
    executeStartPageController();
  });

  $('#hide_side_bars').click(() => {
    view.ruleSideBars();
  });

  $('#edit_page').click((event) => {
    const $targetElement = $(event.target);
    const callback = $targetElement.data('func');
    const arrArgumentsForCallback = [];
    let idCounter = 0;

    if (!callback) {
      return;
    }

    while ($targetElement.data(`id-${idCounter}`)) {
      const argument = $targetElement.data(`id-${idCounter}`);
      arrArgumentsForCallback.push(argument);
      idCounter += 1;
    }

    const lastArgument = $targetElement.data('number');
    arrArgumentsForCallback.push(lastArgument);

    callback(...arrArgumentsForCallback);
  });

  $('#user_text_top_field').on('input', (event) => {
    const userText = $(event.target).val();
    const $elemForInsert = $('#center_text_top');

    view.insertText(userText, $elemForInsert);
  });

  $('#user_text_bottom_field').on('input', (event) => {
    const userText = $(event.target).val();
    const $elemForInsert = $('#center_text_bottom');

    view.insertText(userText, $elemForInsert);
  });

  $('#create_meme').click(() => {
    helper.getImage();
  });

  function executeStartPageController() {
    viewCommon.renderLoadingPage();
    $('*').unbind();
    viewCommon.removeThisPage();
    StartPageController();
  }
}

export default EditorController;
