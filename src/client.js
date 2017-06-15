import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes.js";
import {Router, browserHistory} from "react-router";
import {Provider} from "react-redux";
import createStore from "./redux/create";
import ApiClient from "./helpers/apiClient";

const client = new ApiClient();
const SET_NODE = document.getElementById("app");
const store = createStore(client, localStorage.getItem("reducer") || {})


const MyFirstComponent = (props) => (
  <Provider store={store}>
    <Router history={browserHistory} children={props.routes}/>
  </Provider>
);

ReactDOM
  .render(<MyFirstComponent routes={Routes()}/>, SET_NODE);
