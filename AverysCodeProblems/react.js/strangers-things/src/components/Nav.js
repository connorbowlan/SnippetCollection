import { Link } from 'react-router-dom';
import LogOutOrRegisterButton from './buttons/LogOutOrRegisterButton';

function Nav({ isLoggedIn, setIsLoggedIn, setUserToken, setPosts, setStatus }) {
     return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-3">
               <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <Link className="nav-link" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="/posts">Posts</Link>
                              </li>
                              <li className="nav-item">
                                  {isLoggedIn ? <Link className="nav-link" to="/profile">Profile</Link> : <span></span>}
                              </li>
                              <li className="nav-item">
                                   {isLoggedIn ? <Link className="nav-link" to="/new-post">New Post</Link> : <span></span>}
                              </li>
                              <li className="nav-item">
                              </li>
                         </ul>
                         <span className="navbar-text">
                              <LogOutOrRegisterButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken} setPosts={setPosts} setStatus={setStatus} />
                         </span>
                    </div>
               </div>
          </nav>
     );
}

export default Nav;