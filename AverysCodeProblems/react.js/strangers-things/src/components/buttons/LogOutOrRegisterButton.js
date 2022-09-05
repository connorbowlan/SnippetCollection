import { Link } from 'react-router-dom';
import { fetchAllPosts } from "../../api/apiHelper";

function LogOutOrRegisterButton({ isLoggedIn, setIsLoggedIn, setUserToken, setPosts, setStatus }) {
     async function handleLogOut() {

          if (isLoggedIn) {
               setIsLoggedIn(false);
               setUserToken('');
               localStorage.clear('userToken');

               setPosts(await fetchAllPosts());

               setStatus('You are now logged out.');
          }
     }

     if (isLoggedIn)
          return (
               <button className="btn btn-secondary" onClick={handleLogOut}>Log Out</button>
          );

     return (
          <span>
               <Link to="/register">Register</Link> or <Link to="/log-in">Log In</Link>
          </span>
     );
}

export default LogOutOrRegisterButton;