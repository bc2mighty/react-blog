import { Link } from 'react-router-dom';
import './post.css';

function Post({ post }) {
    const pF = 'http://localhost:4001/images/'
    return (
        <div className='post'>
            {post.photo && (
                <img 
                    src={pF + post.photo} 
                    alt="" 
                    className="postImg" 
                />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((cat, _i) => (
                            <div key={_i} className="postCat">{cat}</div>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
            </div>
            <p className="postDesc">{post.body}</p>
        </div>
    );
}

export default Post;