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
}

export default ViewCommon;
