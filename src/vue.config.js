
export default {
    config: {
        lang: 'ukr',
        locale: 'ukr',
        locales: ['ukr','rus','geo','eng'],
    },
    store: {
        components: {
            axios_route: {
                // ...routeAxios
            }
        }
    },
    modules: {
        axios: {
            timeout: 30000
        },
        alertInfoTime: {
            errorTimeShow: 10000,
            infoTimeShow: 5000,
        }
    },
}
