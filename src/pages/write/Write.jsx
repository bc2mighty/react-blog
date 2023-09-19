import './write.css';

function Write(props) {
    return (
        <div className='write'>
            <form action="" className="writeForm">
                <img 
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" 
                    className="writeImg"
                />
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='fa fa-plus writeIcon'></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Tell your story' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    );
}

export default Write;