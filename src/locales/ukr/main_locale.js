const main_locale = 'ukr';

export default {
    app: require(`@/locales/${main_locale}/app.json`),
    pages: {
        HomePage: require(`@/locales/${main_locale}/pages/HomePage/home-page.json`),
    }
}
