import { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

const PostForm = ({ createPost }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(formData);
        setFormData({});
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <br />
                    <input type="text" name="title" value={formData.title || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Body</label>
                    <br />
                    <textarea name="body" value={formData.body || ''} onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

const mapStateToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapStateToProps)(PostForm)