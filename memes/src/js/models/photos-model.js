class PhotosModel {
  constructor() {}

  transformArrayPhotos(vkData) {
    return vkData.map(item => item.photo_604);
  }

}

export default PhotosModel;
