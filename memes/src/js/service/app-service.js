class AppService {
	constructor() {

	}

	getFriendsListData() {
		const response = {
			count: 5,
			items: [{
					id: 111,
					first_name: 'john',
					last_name: 'calvin',
					photo_100: './_unpublic/selfie.jpg'
				},
				{
					id: 222,
					first_name: 'john',
					last_name: 'calvin',
					photo_100: './_unpublic/selfie.jpg'
				},
				{
					id: 333,
					first_name: 'john',
					last_name: 'calvin',
					photo_100: './_unpublic/selfie.jpg'
				},
				{
					id: 444,
					first_name: 'john',
					last_name: 'calvin',
					photo_100: './_unpublic/selfie.jpg'
				},
				{
					id: 555,
					first_name: 'john',
					last_name: 'calvin',
					photo_100: './_unpublic/selfie.jpg'
				}
			]
		}

		return response.items;
	}

	getFriendPhotos( /*id*/ ) {
		let response = {
			count: 9,
			items: [{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 001.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 002.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 003.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 004.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 005.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 006.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 007.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 008.jpg',
					text: ''
				},
				{
					album_id: 888,
					owner_id: 999,
					photo_604: './_unpublic/Tottenham - 009.jpg',
					text: ''
				}
			]
		}

		return response.items;
	}
}

export default AppService;
