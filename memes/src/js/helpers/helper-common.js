class HelperCommon {
  constructor() {
    this.tagName = 'tagName';
  }

  checkEventTarget(elem, nodeName) {
    const { tagName } = this;

    return elem.prop(tagName) !== nodeName;
  }
}

export default HelperCommon;
