import { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async() => {
            const res = await axios.get('/categories')
            console.log(res.data);
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img 
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" 
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nihil obcaecati assumenda debitis numquam tempore, et iure, temporibus quaerat voluptates recusandae ipsum incidunt dolorem unde eveniet nisi? Ut, voluptatum illo.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map((cat, _i) => (
                            <Link key={_i} className='link' to={`/?catName=${cat.name}`}>
                                <li className="sidebarListItem">{cat.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-"></i>
                    <i className="sidebarIcon fab fa-"></i>
                    <i className="sidebarIcon fab fa-"></i>
                    <i className="sidebarIcon fab fa-"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;