import { Link, Outlet } from 'react-router-dom';
import './topbar.css';
import { useContext } from 'react';
import { Context } from '../../context/Contexts';

function TopBar(props) {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
    }

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
                        {user && (
                            <li className="topListItem" onClick={handleLogout}>LOGOUT</li>
                        )}
                    </ul>
                </div>
                <div className="topRight">
                    {
                        user ? (
                            <img 
                            className='topImg'
                            src={user.profilePic} 
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