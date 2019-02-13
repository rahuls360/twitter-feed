import React, { Component } from 'react';
import PostTweet from './components/PostTweet';

class App extends Component {
  state = {
    tweets: {},
    index: 1
  }
  addTweet = (tweet) => {
    const tweets = {...this.state.tweets};
    let index = this.state.index;
    tweets[index] = tweet;
    ++index;
    this.setState({tweets: tweets, index: index});
  }
  render() {
    return (
      <>
        <PostTweet addTweet={this.addTweet}></PostTweet>
      </>
    );
  }
}

export default App;
