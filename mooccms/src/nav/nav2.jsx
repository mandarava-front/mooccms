import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class Uia extends React.Component {
  render() {
    return (
      <div className="nav2">
        <Router>
          <ul>
            <li>
              <Link to="/ui/ui1/123">按钮</Link>
            </li>
            <li>
              <Link to="/ui/ui2">提交</Link>
            </li>
            <li>
              <Link to="/ui/ui3">剑来</Link>
            </li>
            <li>
              <Link to="/ui/ui4">许淇安</Link>
            </li>
            <li>
              <Link to="/ui/ui5">页面</Link>
            </li>
            <li>
              <Link to="/ui/ui6">结构</Link>
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
