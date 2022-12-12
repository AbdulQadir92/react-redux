import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost, deletePost } from '../actions/postActions';


const Posts = ({ fetchPosts, posts, fetchPost, post, deletePost }) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    const getItem = (id) => {
        fetchPost(id);
    }
    console.log(post);

    const handleDelete = (id) => {
        deletePost(id);
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.map(post => (
                <div key={post.id} onClick={() => getItem(post.id)} style={{ cursor: 'pointer' }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)} style={{ cursor: 'pointer' }}>Delete</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.items,
        post: state.posts.item
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchPost, deletePost })(Posts);
