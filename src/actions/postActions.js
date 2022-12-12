import { FETCH_POSTS, ADD_POST, FETCH_POST, DELETE_POST } from "./types";


export const createPost = (post) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_POST,
                    payload: data
                })
            })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: data
                })
            })
    }
}

export const fetchPost = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: FETCH_POST,
                    payload: data
                })
            })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: DELETE_POST,
                    payload: data
                })
            })
    }
}