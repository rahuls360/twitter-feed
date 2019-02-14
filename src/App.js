import React, { Component } from "react";
import PostTweet from "./components/PostTweet";
import Tweet from "./components/Tweet";
import base from "./base";

class App extends Component {
  state = {
    tweets: {},
    index: 1
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

  componentDidUpdate() {
    const index = Object.keys(this.state.tweets).length;
    console.log(index);
    if (index > 0) {
      this.setState({ index: index });
    }
    // console.log(this.state.tweets);
  }

  addTweet = tweet => {
    const tweets = { ...this.state.tweets };
    let index = this.state.index;
    tweets[index] = tweet;
    ++index;
    this.setState({ tweets: tweets, index: index });
  };

  render() {
    return (
      <>
        <PostTweet addTweet={this.addTweet} />
        {Object.keys(this.state.tweets).map(key => (
          <Tweet tweets={this.state.tweets} key={key} index={key} />
        ))}
      </>
    );
  }
}

export default App;
