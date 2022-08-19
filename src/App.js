import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
import Home from "./Pages/Home/home";
import Services from "./Pages/Services/services";

function App() {
    return ( <
            div className = "App" > {

            } <
            Router >
            <
            Routes >
            <
            Route path = "/home"
            element = { < Home / > }
            /> { / * < Route path = "/services"
            element = { < Services / > }
            /> */
        } <
        /Routes> < /
        Router > <
        /div>
);
}

export default App;