import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/apiHelper";

function RegisterForm({setIsLoggedIn, setUserToken, setStatus}) {
     const navigate = useNavigate();
     const [userName, setUserName] = useState([]);
     const [password, setPassword] = useState([]);
     const [confirmPassword, setConfirmPassword] = useState([]);

     async function handleSubmit(event) {
          event.preventDefault();

          if (password !== confirmPassword) {
               setStatus('The passwords do not match.');
               return;
          }

          const user = {
               user: {
                    username: userName,
                    password: password
               }
          };

          Promise.all([registerUser]).then(async () => {
               const result = await registerUser(user);

               if (result)
               {
                    setIsLoggedIn(true);
                    setUserToken(result.token);
                    localStorage.setItem('userToken', result.token);
                    
                    setStatus(result.message);

                    navigate('/profile');
               }
          });
     }

     return (
          <section>
               <h1>Register</h1>
               <hr />
               <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                         <label className="form-label" htmlFor="UserName">User Name</label>
                         <input className="form-control" type="text" name="UserName" minLength="4" required
                              onChange={(event) => setUserName(event.target.value)} />
                         <div id="UserNameHelp" className="form-text">Minimum user name length is 8 characters.</div>
                    </div>

                    <div className="mb-3">
                         <label className="form-label" htmlFor="Password">Password</label>
                         <input className="form-control" type="password" name="Password" minLength="4" required
                              onChange={(event) => setPassword(event.target.value)} />
                         <div id="PasswordHelp" className="form-text">Minimum password length is 4 characters.</div>
                    </div>

                    <div className="mb-3">
                         <label className="form-label" htmlFor="ConfirmPassword">Confirm Password</label>
                         <input className="form-control" type="password" name="ConfirmPassword" minLength="4" required
                              onChange={(event) => setConfirmPassword(event.target.value)} />
                    </div>
                    <button className="btn btn-primary" type="submit">Register</button>
               </form>
          </section>
     );
}

export default RegisterForm;