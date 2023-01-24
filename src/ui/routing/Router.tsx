import {useRoute} from "./routes";
import Welcome from "../pages/welcome";
import Error from "../pages/error";

export function Router() {
    const route = useRoute();

    switch (route.name) {
        case "app":
            return <Welcome route={route}/>
        case false:
            return <Error/>
        default:
            return <Welcome route={route}/>
    }
}