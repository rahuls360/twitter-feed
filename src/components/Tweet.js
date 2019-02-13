import React from 'react';

class Tweet extends React.Component{
    render(){
        return <p>{this.props.tweets[this.props.index]}</p>
    }
}

export default Tweet;