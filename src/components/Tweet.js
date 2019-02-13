import React from "react";

class Tweet extends React.Component {
  render() {
    return (
      <div className="well">
        <p>{this.props.tweets[this.props.index]}</p>
      </div>
    );
  }
}

export default Tweet;
