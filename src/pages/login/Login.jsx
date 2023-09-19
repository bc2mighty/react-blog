import './login.css';

function Login(props) {
    return (
        <div className='login'>
            <span className="loginTitle">Login to your account</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Enter your email...'/>
                <label>Password</label>
                <input type="text" className='loginInput' placeholder='Enter your password...'/>
                <button className='loginButton'>Login</button>
            </form>
            <button className='loginRegisterButton'>Register</button>
        </div>
    );
}

export default Login;