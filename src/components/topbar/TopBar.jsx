import { Link, Outlet } from 'react-router-dom';
import './topbar.css';

function TopBar(props) {
    const user = false;
    return (
        <>
            <div className='top'>
                <div className="topLeft">
                    <i className="topIcon fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-pinterest-square" aria-hidden="true"></i>
                    <i className="topIcon fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className='link' to=''>HOME</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to=''>ABOUT</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to=''>CONTACT</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to='write'>WRITE</Link>
                        </li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="topRight">
                    {
                        user ? (
                            <img 
                            className='topImg'
                            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt="" />
                        ) : (
                            <ul className="">
                                <Link className='link' to='/login'>LOGIN</Link>
                                &nbsp;
                                <Link className='link' to='/register'>REGISTER</Link>
                            </ul>
                        )
                    }
                    <i className="topSearchIcon fa fa-search"></i>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default TopBar;