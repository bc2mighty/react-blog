import { Link } from 'react-router-dom';
import './post.css';

function Post({ post }) {
    return (
        <div className='post'>
            <img 
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
                className="postImg" 
            />
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