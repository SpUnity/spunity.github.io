import isButtonSelected from './check_button';

function handleFilterHeaderButtons(buttonId, buttons) {
  let nameFilter = buttonId.slice(7)
  ;
  if (jQuery.inArray(buttonId, buttons) > -1) {
    if ($('#'+ buttonId).hasClass('selected-button')) {
      $('#filter_'+ nameFilter).css('display', 'block');
    } else {
      $('#filter_'+ nameFilter).css('display', 'none');
    }

    if (!isButtonSelected(buttons)) {
      return true;
    }
  }
}

export default handleFilterHeaderButtons;
