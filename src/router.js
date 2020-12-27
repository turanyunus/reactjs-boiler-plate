import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import ContentComponent from "./views/ContentPage";


const RouterComponent = () => {
    let history = useHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ContentComponent}/>
            </Switch>
        </Router>
    );
}
export default RouterComponent