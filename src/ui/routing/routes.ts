import {createRouter, defineRoute, param} from "type-route";

export const {RouteProvider, useRoute, routes} = createRouter({
    app: defineRoute({
            "survey": param.query.optional.string
        },
        () => "/")
})