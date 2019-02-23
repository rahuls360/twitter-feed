import React from "react";
import { Link } from "react-router-dom";

class Tweet extends React.Component {
  render() {
    return (
      <div className="well">
        <p>
          {this.props.tweets[this.props.index]}
          <span className="left-margin">
            <Link to="/edit">Edit</Link>
            <Link to="/delete">Delete</Link>
          </span>
        </p>
      </div>
    );
  }
}

export default Tweet;
