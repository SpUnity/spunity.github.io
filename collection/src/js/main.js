'use strict';

import appController from './controller/app-controller';
import '../scss/main.scss'
import showError from "./helpers/show_error";

window.keys = {};
window.allData = [];

$(function() {
  try {
    appController();
  }catch (e) {
    showError(false);
    console.log('Ошибка: '+ e.name +'\n'+ e.message +'\n'+ e.stack);
  }
});
