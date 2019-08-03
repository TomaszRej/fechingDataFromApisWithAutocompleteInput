import React from "react";
import ReactDOM from "react-dom";
import Root from "./routing/Root";
import configureStore from "src/store/store/store";
import "@babel/polyfill";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";


var _ = require("lodash");


const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => Icons[icon]);

library.add(...iconList);


const store = configureStore;

ReactDOM.render(<Root store={store}/>, document.getElementById("app"));
