import Post from '../post/Post';
import './post.css';

function Posts(props) {
    return (
        <div className='posts'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;