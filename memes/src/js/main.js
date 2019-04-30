

import '@babel/polyfill';
import StartPageController from './controllers/start-page-controller';
import ViewCommon from './views/view-common';
import '../scss/main.scss';


$(async () => {
    try {
        await StartPageController();
    } catch (err) {
        const viewCommon = new ViewCommon();

        viewCommon.renderErrorPage();
        console.log( `${err.name}: ${err.message}` );
    }
});
