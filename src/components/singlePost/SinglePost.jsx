import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SinglePost(props) {
    const [post, setPost] = useState({})
    const location = useLocation();
    const _id = location.pathname.split('/')[2]

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
                            src={post.photo}
                            alt="" 
                            className='singlePostImg'
                        />
                    )
                }
                <h1 className='singlePostTitle'>
                    {post.title}
                </h1>
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa fa-pencil-square-o"></i>
                    <i className="singlePostIcon fa fa-trash"></i>
                </div>
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