function showError(...args) {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {
      $('body').empty();
      $('<h1>', {text: 'Наш сервис временно недоступен:('}).appendTo('body');
      return true;
    }
  }
}

export default showError;
