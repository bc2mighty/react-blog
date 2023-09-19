import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Posts from "./components/posts/Posts";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/post/:id" element={<Single/>}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;