import HelperCollection from '../helpers/app-helpers';

let helper = new HelperCollection();

export default class ServiceCollection {
    constructor () {}

    getData(callback) {
        fetch('https://spunity.github.io/collection/json/data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                window.allData = data;
                localStorage['allMovies'] = JSON.stringify(data);
                callback();
                return false;
            })
            .catch(function(error) {
                console.log(error);
                return true;
            })
            .then(function (condition) {
                if (condition) {
                    window.allData = JSON.parse(localStorage['allMovies']);
                    callback();
                }
            })
            .catch(function(error) {
                console.log(error);
            });

        fetch('https://spunity.github.io/collection/json/keys.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                window.keys = data;
                localStorage['allKeys'] = JSON.stringify(data);
                helper.fillFilters(data);
                return false;
            })
            .catch(function(error) {
                console.log(error);
                return true;
            })
            .then(function (condition) {
                if (condition) {
                    window.keys = JSON.parse(localStorage['allKeys']);
                    helper.fillFilters(window.keys);
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}
