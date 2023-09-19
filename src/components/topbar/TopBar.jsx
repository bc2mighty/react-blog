import './topbar.css';

function TopBar(props) {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa fa-facebook-square" aria-hidden="true"></i>
                <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                <i className="topIcon fa fa-pinterest-square" aria-hidden="true"></i>
                <i className="topIcon fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className='topImg'
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" />
                <i className="topSearchIcon fa fa-search"></i>
            </div>
        </div>
    );
}

export default TopBar;