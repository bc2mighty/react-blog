import { useContext, useState } from 'react';
import './write.css';
import { Context } from '../../context/Contexts';
import axios from 'axios';

function Write(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const {user} = useContext(Context);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            body
        }
        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name;
            data.append('name', filename)
            data.append('file', file)
            newPost.photo = filename

            try {
                await axios.post("/upload", data)
            } catch(err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.post("/posts", newPost)
            window.location.replace('/post/' + res.data._id)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='write'>
            <form action="" className="writeForm" onSubmit={handleSubmit}>
                {
                    file && (
                        <img 
                            src={URL.createObjectURL(file)} 
                            alt="" 
                            className="writeImg"
                        />
                )}
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='fa fa-plus writeIcon'></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}} onChange={(e) => {setFile(e.target.files[0])}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Tell your story' className='writeInput writeText' onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    );
}

export default Write;