import {Router} from "../../routing";
import Header from "../header/Header";

export function App() {
    return <>
        <Header children={"test"}/>
        <Router/>
    </>
}
