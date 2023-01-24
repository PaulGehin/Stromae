import "./Welcome.scss";
import {routes} from "../../routing";
import {Route} from "type-route";

function Welcome(props: { route: Route<typeof routes.app> }) {
    const {route} = props
    const {survey} = route.params;
    console.log({survey});

    return (
        <div data-id="welcome" className="stromae-welcome">
            Welcome {survey}
        </div>
    );
}

export default Welcome;
