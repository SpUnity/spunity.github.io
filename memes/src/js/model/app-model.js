

class AppModel {
	constructor() {

	}

	transformArrayPhotos(vkData) {
		let transfromedData = vkData.map((item) => {
			return item.photo_604;
		})

		return transfromedData;
	}
}

export default AppModel;
