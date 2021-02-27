import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"     component={ Home } exact/>
                    <Route path="/about"     component={ About } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}