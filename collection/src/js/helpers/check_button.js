function isButtonSelected(arrId) {
  let confirm = false;

  jQuery.each(arrId, function(index, item) {
    if ($('#'+ item).hasClass('selected-button')) {
      confirm = true;
    }
  });
  return confirm;
}

export default isButtonSelected;
