import './sidebar.css';

function Sidebar(props) {
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
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
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