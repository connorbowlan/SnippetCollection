import { Link } from "react-router-dom";

function Welcome({ isLoggedIn, currentUser }) {
     if (isLoggedIn)
          return (
               <section>
                    <h1>Welcome, {currentUser.username}!</h1>
                    <p>Feel free to go check out some <Link to="/posts">posts</Link> or visit your <Link to="/profile">profile</Link> to check some messages.</p>
               </section>
          )

     return (
          <section>
               <h1>Welcome, Stranger!</h1>
               <p>Please <Link to="/register">register</Link> or <Link to="/log-in">log in</Link> to get started.</p>
          </section>
     );
}

export default Welcome;