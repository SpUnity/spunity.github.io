class EditorModel {
  constructor() {
    this.editorHandlerCodes = {
      textTop: ['side_text_top', 'center_text_top'],
      textBottom: ['side_text_bottom', 'center_text_bottom'],
      imgMoustache: ['center_dark_moustache', 'center_light_moustache', 'image_moustache'],
      imgGlasses: ['center_dark_glasses', 'center_light_glasses', 'image_glasses'],
      imgHat: ['center_dark_hat', 'center_light_hat', 'image_hat'],
      divMoustache: ['center_moustache'],
      divGlasses: ['center_glasses'],
      divHat: ['center_hat'],
      textSize: 0,
      textColor: 1,
      imgSize: 2,
      imgColor: 3,
      divShow: 4,
    };
  }

  transformDataCode(str) {
    const arrCodes = str.split('-');
    const arrId = this.editorHandlerCodes[arrCodes[0]];
    const typeAction = arrCodes[1];
    const funcNumber = this.editorHandlerCodes[arrCodes[2]];
    return {
      funcNumber,
      dataForChangig: [...arrId, typeAction],
    };
  }
}

export default EditorModel;
