import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

function Settings(props) {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update Your Account</div>
                    <div className="settingsUpdateTitle">Delete Account</div>
                </div>
                <div className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt="" 
                            className="settingsImg" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa fa-user-circle"></i>
                        </label>
                        <input type="text" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username: </label>
                    <input type="text" />
                    <label>Email: </label>
                    <input type="text" />
                    <label>Password: </label>
                    <input type="text" />
                    <button className="settingsSubmit">Update</button>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;