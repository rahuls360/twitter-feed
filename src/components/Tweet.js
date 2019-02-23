import React from "react";

class Tweet extends React.Component {
  render() {
    return (
      <div className="well">
        <p>
          {this.props.tweets[this.props.index]}
          <span className="left-margin">
            <button onClick={()=> this.props.deleteTweet(this.props.index)}>X</button>
          </span>
        </p>
      </div>
    );
  }
}

export default Tweet;
