class AppHelper {
    constructor() {}

    checkEventTarget(elem, nodeName) {
        return elem.prop('tagName') !== nodeName;
    }
}

export default AppHelper;
