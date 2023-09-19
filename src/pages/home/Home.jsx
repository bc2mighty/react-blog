import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

function Home(props) {
    return (
        <>
            <Header/>
            <div className='home'>
                <Posts/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;