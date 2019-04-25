
class PhotosHelper {
  constructor() {}

  checkEventTarget(elem, nodeName) {
    return elem.prop('tagName') !== nodeName;
  }
}

export default PhotosHelper;
