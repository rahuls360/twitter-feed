import React from 'react';

class PostTweet extends React.Component{
    postTweetRef = React.createRef();
    handleTextbox = (event) => {
        this.props.addTweet(this.postTweetRef.current.value);
        event.currentTarget.reset()
        event.preventDefault();
    }
    render(){
        return <div className="tweetbox">
        <form onSubmit={this.handleTextbox}>
          <textarea name="tweet" id="" cols="30" rows="5" ref={this.postTweetRef} placeholder="Enter Tweet"></textarea>
          <input type="submit" value="Post Tweet"/>
        </form>
        </div>
    }
}
export default PostTweet;
