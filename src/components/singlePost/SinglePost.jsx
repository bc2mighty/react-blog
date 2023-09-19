import './singlePost.css';

function SinglePost(props) {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img 
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" 
                    className='singlePostImg'
                />
                <h1 className='singlePostTitle'>
                    Lorem, ipsum dolor sit
                </h1>
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa fa-pencil-square-o"></i>
                    <i className="singlePostIcon fa fa-trash"></i>
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis odio deserunt suscipit nulla laboriosam quas, ab aliquam at magnam? Similique laudantium qui eveniet obcaecati. Consequuntur, ipsa perferendis? Eum, officia. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis odio deserunt suscipit nulla laboriosam quas, ab aliquam at magnam? Similique laudantium qui eveniet obcaecati. Consequuntur, ipsa perferendis? Eum, officia. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis odio deserunt suscipit nulla laboriosam quas, ab aliquam at magnam? Similique laudantium qui eveniet obcaecati. Consequuntur, ipsa perferendis? Eum, officia. 
                </p>
            </div>
        </div>
    );
}

export default SinglePost;