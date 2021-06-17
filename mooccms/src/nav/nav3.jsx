import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class Form extends React.Component {
  render() {
    return (
      <div className="nav2">
        <Router>
          <ul>
            <li>
              <Link to="/form/login">登录</Link>
            </li>
            <li>
              <Link to="/form/register">注册</Link>
            </li>
            <li>
              <Link to="/ui/ui1">表单信息</Link>
            </li>
            <li>
              <Link to="/ui/ui2">用户信息</Link>
            </li>
            <li>
              <Link to="/ui/ui3">甲方总纲</Link>
            </li>
            <li>
              <Link to="/ui/ui4">大跟人</Link>
            </li>
            <li>
              <Link to="/ui/ui5">军队</Link>
            </li>
            <li>
              <Link to="/ui/ui6">大明</Link>
            </li>
            <li>
              <Link to="/ui/ui2">按钮</Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}
