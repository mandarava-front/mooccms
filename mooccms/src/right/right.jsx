import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import Uia from "../nav/nav2.jsx";
import Form from "../nav/nav3.jsx";
import Ui1 from "../ui/ui1.jsx";
import Login from "../form/login.jsx";
import Register from "../form/register.jsx";
import BaseTable from "../table/basetable.jsx";
import Heightable from "../table/heightTable.jsx";
import City from "../city/city.jsx";
export default class Rightc extends React.Component {
  render() {
    return (
      <div className="right">
        <Router>
          <div>
            <Switch>
              <Route path="/uis" component={Uia} />

              {/* <Route path="/table" component={Table} /> */}

              <Route exact path="/form">
                <Form></Form>
              </Route>
              <Route path="/form/login">
                <Login></Login>
              </Route>
              <Route path="/form/register">
                <Register></Register>
              </Route>
              <Route path="/table">
                <BaseTable></BaseTable>
              </Route>
              <Route path="/heightable">
                <Heightable></Heightable>
              </Route>
              <Route path="/city">
                <City></City>
              </Route>
              <Route path="/ui/ui1/:id" component={Ui1} />
              {this.props.children}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
