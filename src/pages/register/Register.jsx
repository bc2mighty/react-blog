import { Link } from 'react-router-dom';
import './register.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Contexts';

function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);

    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            })
            if(res.data) window.location.replace('/login')
        } catch(err) {
            setError(true);
        }
    }

    useEffect(() => {
        if(user) window.location.replace('/')
    }, [user])
    
    return (
        <div className='register'>
            <span className="registerTitle">Create your account</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username...' onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Enter your email...' onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" className='registerInput' placeholder='Enter your password...' onChange={e => setPassword(e.target.value)}/>
                <button className='registerButton'>Register</button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to='/login'>Login</Link>
            </button>
            {error && (
                <span style={{color: 'red', marginTop: '10px'}}>Something Went Wrong</span>
            )}
        </div>
    );
}

export default Register;