import ViewsHelper from '../helpers/views-helper';
import textConstants from '../helpers/text-constants';

class ViewCommon {
  constructor() {
    this.$body = $('body');
    this.$main = $('#main');
    this.$header = $( '#header' );
    this.loadingBlockId = 'loading_page';
  }

  renderLoadingPage() {
    const { $body } = this;
    const loadingId = this.loadingBlockId;
    const $container = $('<div>', {
      id: loadingId,
    }).appendTo($body);

    $('<div>', {
      class: 'lds-hourglass',
    }).appendTo($container);
  }

  removeLoadingPage() {
    const loadingId = this.loadingBlockId;

    $(`#${loadingId}`).remove();
  }

  removeThisPage() {
    const { $main, $header } = this;

    $main.empty();
    $header.empty();
  }

  renderErrorPage() {
      const { $main } = this;
      const errorText = textConstants.ru.errorMessage;

      this.removeThisPage();

      const $errorPage = ViewsHelper.createContainer('div', 'error-page');
      $errorPage.appendTo($main);
      ViewsHelper.appendTextElement('h1', 'error_text', null, errorText, $errorPage);
  }
}

export default ViewCommon;
