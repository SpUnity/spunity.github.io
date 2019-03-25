function executeAndDeleteHandler(elem) {
  elem.trigger('click');
  elem.unbind();
}

export default executeAndDeleteHandler;
