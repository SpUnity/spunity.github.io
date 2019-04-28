class HelperCommon {
  constructor() {
    this.tagName = 'tagName';
  }

  checkEventTarget(elem, nodeName) {
    const { tagName } = this;

    return elem.prop(tagName) !== nodeName;
  }

  static isCorrectNumber(num, max, min) {
    return num < max && num > min;
  }
}

export default HelperCommon;
