import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class Ui1 extends React.Component {
  render() {
    return (
      <div className="ui1">
        UI界面11111
        {this.props.match.params.id}
      </div>
    );
  }
}
