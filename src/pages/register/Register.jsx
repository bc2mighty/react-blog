import './register.css';

function Register(props) {
    return (
        <div className='register'>
            <span className="registerTitle">Create your account</span>
            <form action="" className="registerForm">
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username...'/>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Enter your email...'/>
                <label>Password</label>
                <input type="text" className='registerInput' placeholder='Enter your password...'/>
                <button className='registerButton'>Register</button>
            </form>
            <button className='registerLoginButton'>Login</button>
        </div>
    );
}

export default Register;