import Cookies from 'js-cookie';

class ServiceVkAPI {
  constructor() {
    this.baseUrl = 'https://api.vk.com/method/';
  }

  async getFriendsListData() {
    const token = Cookies.get('access_token');
    const url = `${this.baseUrl}friends.get?fields=photo_100&access_token=${token}&v=5.52`;
    const data = await $.ajax({
      url,
      type: 'GET',
      dataType: 'JSONP',
    });
    return data.response ? data.response.items : false;
  }

  async getFriendPhotos(userId) {
    const token = Cookies.get('access_token');
    const url = `${this.baseUrl}photos.get?owner_id=${userId}&album_id=profile&access_token=${token}&v=5.52`;
    const data = await $.ajax({
      url,
      type: 'GET',
      dataType: 'JSONP',
    });
    return data.response ? data.response.items : false;
  }

  toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      const reader = new FileReader();

      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };

    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
}


export default ServiceVkAPI;
