import "babel-polyfill";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./js/serviceWorker";
import App from "./js/App";
import fontAwesome from "./js/fontAwesome";

fontAwesome();
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
