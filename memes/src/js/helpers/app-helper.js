import Cookies from 'js-cookie';
import html2canvas from 'html2canvas';

class AppHelper {
	constructor() {}

	checkEventTarget(elem, nodeName) {
		return elem.prop('tagName') !== nodeName;
	}

	isTokenInUrl() {
		let url = window.location.href;

		return url.includes('access_token');
	}

	getFirstPage() {
		return !!Cookies.get('access_token') && isTokenAlive() ? ['friends_list'] : ['authorization'];
	}

	setTokenData() {
		let url = window.location.href,
		usefullData = url.split('#')[1],
		arrUsefullData = usefullData.split('&'),
		arrToken = arrUsefullData[0].split('='),
		arrExpire = arrUsefullData[1].split('='),
		now = new Date(),
		expireTime = +arrExpire[1] + +now
		;

		Cookies.set(arrToken[0], arrToken[1]);
		Cookies.set(arrExpire[0], '' + expireTime);
	}

	async getImage() {
		$( `#download_meme` ).css('visibility', 'hidden');

		let canvas = await html2canvas(document.querySelector( '#canvas_image' )),
		canvasImage = canvas.toDataURL("image/png");

		$( `#download_meme` ).attr('href', canvasImage);
		$( `#download_meme` ).attr('download', 'Your_meme');
		$( `#download_meme` ).css('visibility', 'visible');
	}
}

function isTokenAlive() {
	let endTimeToken = +Cookies.get('expires_in'),
	now = new Date()
	;

	return endTimeToken > +now;
}


export default AppHelper;
