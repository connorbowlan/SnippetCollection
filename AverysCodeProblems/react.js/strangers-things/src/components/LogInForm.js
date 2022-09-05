import { useState } from "react";
import { fetchAllPostsWithAuth, logIn } from "../api/apiHelper";

import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsLoggedIn, setUserToken, setPosts, setStatus }) {
     const navigate = useNavigate();
     const [userName, setUserName] = useState([]);
     const [password, setPassword] = useState([]);

     async function handleSubmit(event) {
          event.preventDefault();

          const user = {
               user: {
                    username: userName,
                    password: password
               }
          };

          Promise.all([logIn]).then(async () => {
               const result = await logIn(user);

               if (result) {
                    setIsLoggedIn(true);
                    setUserToken(result.token);
                    localStorage.setItem('userToken', result.token);

                    setStatus(result.message);

                    setPosts(await fetchAllPostsWithAuth(result.token));
                    
                    navigate('/profile');
               } else {
                    setStatus('Invalid user name or password combination.');
               }
          });
     }

     return (
          <section>
               <h1>Login</h1>
               <hr />
               <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                         <label className="form-label" htmlFor="UserName">User Name</label>
                         <input className="form-control" type="text" name="UserName" required
                              onChange={(event) => setUserName(event.target.value)} />
                    </div>

                    <div className="mb-3">
                         <label className="form-label" htmlFor="Password">Password</label>
                         <input className="form-control" type="password" name="Password" required
                              onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <button className="btn btn-primary" type="submit">Log In</button>
               </form>
          </section>
     );
}

export default LoginForm;