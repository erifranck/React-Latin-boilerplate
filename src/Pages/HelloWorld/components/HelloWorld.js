import React from "react";
import {connect} from "react-redux";
import {load} from "../../../redux/modules/greetings";
import "./HelloWorld.scss";

const HelloWorld = (props) => (
  <div className="greeting-container">{ props.greeting }</div>
);
const mapStates = (states) => ({greeting: states.greetings.value})
const mapDispatch = {load}
export default connect(mapStates, mapDispatch)( HelloWorld );
