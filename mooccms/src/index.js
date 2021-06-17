import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./index.less";
import $ from "jquery";
import "./indexfun.js";
import "antd/dist/antd.css";
//导入组件
import App from "./app";
import Nav from "./nav/nav.jsx";
import Rightc from "./right/right.jsx";

ReactDOM.render(
  <div>
    <App>
      <Nav></Nav>
      <Rightc></Rightc>
    </App>
  </div>,

  document.getElementById("app")
);
