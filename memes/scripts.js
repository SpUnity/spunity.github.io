'use strict'

window.onload = function () {
	const btn = document.querySelector('#auth');

	btn.onclick = function () {
		fetch('https://oauth.vk.com/authorize?client_id=6939619&display=page&redirect_uri=http://spunity.github.io/memes/&display=popup&scope=friends&response_type=token&v=5.93&state=123456')
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			})
	}
}
