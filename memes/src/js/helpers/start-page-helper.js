import Cookies from 'js-cookie';
import html2canvas from 'html2canvas';

class StartPageHelper {
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
}

function isTokenAlive() {
  const endTimeToken = +Cookies.get('expires_in');
  const now = new Date().getTime();

  return endTimeToken > now;
}


export default StartPageHelper;
