import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
//导入二级导航
import Ui from "./nav2.jsx";
import Uiall from "./navcontainer.jsx";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="lnav">
            <div className="logo">
              <img src={require("../../img/logo-ant.svg")} alt="" />
              <span>IMOOC MS</span>
            </div>
            <ul>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/uis">UI</Link>
              </li>
              <li>
                <Link to="/form">表单</Link>
              </li>
              <li>
                <Link to="/table">表格</Link>
              </li>
              <li>
                <Link to="/heightable">高级表格</Link>
              </li>
              <li>
                <Link to="/">富文本</Link>
              </li>
              <li>
                <Link to="/city">城市管理</Link>
              </li>
              <li>
                <Link to="/">订单管理</Link>
              </li>
              <li>
                <Link to="/">员工管理</Link>
              </li>
              <li>
                <Link to="/">车辆地图</Link>
              </li>
              <li>
                <Link to="/">图标</Link>
              </li>
              <li>
                <Link to="/">权限设置</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/ui" Component={Ui} />
          </Switch>
        </Router>
      </div>
    );
  }
}
