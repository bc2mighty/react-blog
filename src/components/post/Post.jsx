import './post.css';

function Post(props) {
    return (
        <div className='post'>
            <img 
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="" 
                className="postImg" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Music</div>
                    <div className="postCat">Life</div>
                </div>
                <div className="postTitle">Lorem ipsum dolor sit amet</div>
                <hr />
                <div className="postDate">1 hour ago</div>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, exercitationem. Animi dicta fuga debitis deleniti optio praesentium, ad cupiditate unde. Consequuntur officiis similique voluptatibus illo magni labore explicabo quod dignissimos.</p>
        </div>
    );
}

export default Post;