import Post from '../post/Post';
import './post.css';

function Posts({ posts }) {
    return (
        <div className='posts'>
            {
                posts.map((post, _i) => (
                    <Post key={_i} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;