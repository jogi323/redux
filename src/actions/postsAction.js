import { FETCH_POSTS, JSON_URL, SAVE_POST_URL, SAVE_POSTS } from '../constants/types';

export const getPosts = () => (dispatch) => {
    fetch(JSON_URL)
    .then(response => response.json())
    .then(posts => {
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    }
        
    )
}

export const savePosts = (post) => (dispatch) => {
    fetch(SAVE_POST_URL,{
        method: "POST",
        headers: {
            "content-type": "application/json" 
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(post => {
        dispatch({
            type: SAVE_POSTS,
            payload: post
        })
    }
        
    )
}