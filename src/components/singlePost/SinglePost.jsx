import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Contexts';

function SinglePost(props) {
    const [post, setPost] = useState({})
    const location = useLocation();
    const _id = location.pathname.split('/')[2]
    const pF = 'http://localhost:4001/images/'

    const {user} = useContext(Context);

    const handleDelete = async(e) => {
        try {
            await axios.delete('/posts/' + _id);
            window.location.replace('/')
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get(`/posts/${_id}`)
            setPost(res.data)
        }
        getPost();
    }, [_id])
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {
                    post.photo && (
                        <img 
                            src={`${pF}${post.photo}`}
                            alt="" 
                            className='singlePostImg'
                        />
                    )
                }
                <h1 className='singlePostTitle'>
                    {post.title}
                </h1>
                {user?.username === post.username && (
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa fa-pencil-square-o"></i>
                        <i className="singlePostIcon fa fa-trash" onClick={handleDelete}></i>
                    </div>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link className='link' to={`/?username=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className='singlePostDesc'>
                    {post.body}
                </p>
            </div>
        </div>
    );
}

export default SinglePost;