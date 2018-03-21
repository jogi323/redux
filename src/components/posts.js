import React, { Component } from 'react';
import { getPosts } from '../actions/postsAction';
import {connect}  from 'react-redux';
import '../css/posts.css';

class Posts extends Component {
    componentWillMount () {
        this.props.getPosts();    
    }
    
    render() {
        const postItem = this.props.posts.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ));
        return (
        <div className="posts-list">
            <h1>Posts</h1>
            {postItem}
        </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        posts : state.posts.items
    }
);

export default connect(mapStateToProps,{getPosts}) (Posts);
