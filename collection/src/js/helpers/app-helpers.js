export default class HelperCollection {
    constructor() {

    }

    isButtonSelected(arrId) {
        let confirm = false;

        jQuery.each(arrId, function(index, item) {
            if ($('#'+ item).hasClass('selected-button')) {
                confirm = true;
            }
        });
        return confirm;
    }

    showError(...args) {
        for (let i = 0; i < args.length; i++) {
            if (!args[i]) {
                $('body').empty();
                $('<h1>', {text: 'Наш сервис временно недоступен:('}).appendTo('body');
                return true;
            }
        }
    }

    fillFilters(keysObj) {
        let objGenre = keysObj['genre'],
            objCountry = keysObj['country']
        ;

        for (let key in objGenre) {
            $('<button>', {class: 'filter-button', id: 'button_genre_' + key, text: '' + objGenre[key]}).appendTo('#filter_genre');
        }
        for (let key in objCountry) {
            $('<button>', {class: 'filter-button', id: 'button_country_' + key, text: '' + objCountry[key]}).appendTo('#filter_country');
        }
    }

    transformIdToString(objWithKeys, keysProp, keysObj) {
        let str = ''
        ;
        jQuery.each(objWithKeys, function(index, item) {
            if (index > 0) {
                str += ', ';
            }
            str += keysObj[keysProp][''+ item] || '';
        });
        return str;
    }

    handleFilterHeaderButtons(buttonId, buttons) {
        let nameFilter = buttonId.slice(7)
        ;
        if (jQuery.inArray(buttonId, buttons) > -1) {
            if ($('#'+ buttonId).hasClass('selected-button')) {
                $('#filter_'+ nameFilter).css('display', 'block');
            } else {
                $('#filter_'+ nameFilter).css('display', 'none');
            }

            if (!this.isButtonSelected(buttons)) {
                return true;
            }
        }
    }

    filterMovies(movie) {
        let rightMovie = true,
            self = this
        ;

        if (self.isButtonSelected(['button_year'])) {
            rightMovie = self.isButtonSelected(['year_before']) && movie.year < 2000 ||
                self.isButtonSelected(['year_after']) && movie.year >= 2000;
        }

        if (self.isButtonSelected(['button_genre']) && rightMovie) {
            let arr = movie['genreId'];

            rightMovie = false;

            jQuery.each(arr, function(index, item) {
                if (self.isButtonSelected(['button_genre_'+ item])) {
                    rightMovie = true;
                }
            });
        }

        if (self.isButtonSelected(['button_country']) && rightMovie) {
            let arr = movie['countryId'];

            rightMovie = false;

            jQuery.each(arr, function(index, item) {
                if (self.isButtonSelected(['button_country_'+ item])) {
                    rightMovie = true;
                }
            });
        }

        return rightMovie;
    }
}