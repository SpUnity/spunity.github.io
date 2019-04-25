import Cookies from 'js-cookie';
import html2canvas from 'html2canvas';

class AppHelper {
  constructor() {}

  checkEventTarget(elem, nodeName) {
    return elem.prop('tagName') !== nodeName;
  }

  isTokenInUrl() {
    const url = window.location.href;

    return url.includes('access_token');
  }

  getFirstPage() {
    const authorizationPageId = 'authorization';
    const friendsListPageId = 'friends_list';
    return !!Cookies.get('access_token') && isTokenAlive() ? friendsListPageId : authorizationPageId;
  }

  setTokenData() {
    const url = window.location.href;
    const usefullData = url.split('#')[1];
    const arrUsefullData = usefullData.split('&');
    const arrToken = arrUsefullData[0].split('=');
    const arrExpire = arrUsefullData[1].split('=');
    const now = new Date().getTime();
    const expireTime = ((+arrExpire[1]) * 1000) + now;

    Cookies.set(arrToken[0], arrToken[1]);
    Cookies.set(arrExpire[0], `${expireTime}`);
  }

  async getImage() {
    $('#download_meme').css('visibility', 'hidden');

    const canvas = await html2canvas(document.querySelector('#canvas_image'));
    const canvasImage = canvas.toDataURL('image/jpeg', 1.0);

    $('#download_meme').attr('href', canvasImage);
    $('#download_meme').attr('download', 'Your_meme.jpg');
    $('#download_meme').css('visibility', 'visible');
  }
}

function isTokenAlive() {
  const endTimeToken = +Cookies.get('expires_in');
  const now = new Date().getTime();

  return endTimeToken > now;
}


export default AppHelper;
