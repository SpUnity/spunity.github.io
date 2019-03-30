'use strict';

import appController from './controller/app-controller';
import '../scss/main.scss';
import HelperCollection from './helpers/app-helpers';

window.keys = {};
window.allData = [];

$(function() {
  try {
    appController();
  }catch (e) {
    let helper = new HelperCollection();
    helper.showError(false);
    console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
  }
});
