import Cookies from 'js-cookie';

class StartPageService {
  constructor() {}

  async getFriendsListData() {
    const token = Cookies.get('access_token');
    const data = await $.ajax({
      url: `https://api.vk.com/method/friends.get?fields=photo_100&access_token=${token}&v=5.52`,
      type: 'GET',
      dataType: 'JSONP',
    });
    return data.response ? data.response.items : false;
  }

  async getFriendPhotos(userId) {
    const token = Cookies.get('access_token');
    const data = await $.ajax({
      url: `https://api.vk.com/method/photos.get?owner_id=${userId}&album_id=profile&access_token=${token}&v=5.52`,
      type: 'GET',
      dataType: 'JSONP',
    });
    return data.response ? data.response.items : false;
  }
}


export default StartPageService;
