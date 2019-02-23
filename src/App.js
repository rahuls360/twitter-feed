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

  deleteTweet = (index) => {
    let tweets = {...this.state.tweets};
    console.log(index);
    tweets[index] = null;
    this.setState({tweets: tweets});
  }

  render() {
    return (
      <>
        <PostTweet addTweet={this.addTweet} />{" "}
        {Object.keys(this.state.tweets).map(key => (
          <Tweet tweets={this.state.tweets} key={key} index={key} deleteTweet={this.deleteTweet}/>
        ))}
      </>
    );
  }
}

export default App;
