import React, { Component } from "react";
import PostTweet from "./components/PostTweet";
import Tweet from "./components/Tweet";
import base from "./base";

class App extends Component {
  state = {
    tweets: {},
    index: 0
  };

  componentDidMount() {
    this.ref = base.syncState("Tweets", {
      context: this,
      state: "tweets"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTweet = tweet => {
    const tweets = {
      ...this.state.tweets
    };
    let index = this.state.tweets.length || 0;
    tweets[index] = tweet;
    index++;
    this.setState({
      tweets: tweets,
      index: index
    });
  };

  render() {
    return (
      <>
        <PostTweet addTweet={this.addTweet} />{" "}
        {Object.keys(this.state.tweets).map(key => (
          <Tweet tweets={this.state.tweets} key={key} index={key} />
        ))}
      </>
    );
  }
}

export default App;
