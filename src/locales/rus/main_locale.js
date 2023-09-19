const main_locale = 'rus';

export default {
    app: require(`@/locales/${main_locale}/app.json`),
    pages: {
        HomePage: require(`@/locales/${main_locale}/pages/HomePage/home-page.json`),
    }
}
