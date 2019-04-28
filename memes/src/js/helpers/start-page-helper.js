import Cookies from 'js-cookie';

class StartPageHelper {
  constructor() {
    this.tokenName = 'access_token';
    this.duartionName = 'expires_in';
  }

  isTokenInUrl() {
    const url = window.location.href;
    const { tokenName } = this;
    const hasToken = url.includes(tokenName);

    hasToken ? this.setTokenData() : null;

    return hasToken;
  }

  findGoodToken() {
    const { tokenName } = this;
    const { duartionName } = this;

    return !!Cookies.get(tokenName) && isTokenAlive(duartionName);
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

function isTokenAlive(durationName) {
  const endTimeToken = +Cookies.get(durationName);
  const now = new Date().getTime();

  return endTimeToken > now;
}


export default StartPageHelper;
