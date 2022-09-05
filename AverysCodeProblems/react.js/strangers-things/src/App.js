import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllPosts, fetchAllPostsWithAuth, fetchUserData } from './api/apiHelper';

import Posts from './components/Posts';
import RegisterForm from './components/RegisterForm';
import Status from './components/Status';
import LoginForm from './components/LogInForm';
import NewPostForm from './components/NewPostForm';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import MessageForm from './components/MessageForm';
import Post from './components/Post';

function App() {
  const [userToken, setUserToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      setUserToken(userToken);
      return true;
    }

    return false;
  });
  const [currentUser, setCurrentUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    Promise.all([fetchUserData, fetchAllPostsWithAuth, fetchAllPosts]).then(async () => {
      // Debating on doing the recommended makeHeaders function.
      // I honestly like the separation of functionality.
      if (isLoggedIn) {
        // This could likely be moved to a better place.
        // Cool thing is I could've checked to see if currentUser's contents
        // were defined instead of isLoggedIn, but I'm too far in to refactor code.

        // The only reason I was using this was to match the author to the posts.
        // Annoyed that isAuthor exists.
        // Turns out I will need this.
        setCurrentUser(await fetchUserData(userToken));
        setPosts(await fetchAllPostsWithAuth(userToken));

      } else {
        setCurrentUser([]);
        setPosts(await fetchAllPosts());
      }
    });
  }, [isLoggedIn, userToken]);

  return (
    <BrowserRouter>
      <div className="container">

        <Logo />

        {/* Really wish there were a better way to do this? Seems like it could be more centralized. */}
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken} setPosts={setPosts} setStatus={setStatus} />

        <main role="main">
          <Status status={status} />

          <Routes>
            <Route path="/"
              element={<Welcome isLoggedIn={isLoggedIn} currentUser={currentUser} />}>
            </Route>

            <Route path="/post/:postId"
              element={<Post />}>
            </Route>

            <Route path="/posts"
              element={<Posts isLoggedIn={isLoggedIn} userToken={userToken} posts={posts} setPosts={setPosts} setStatus={setStatus} />}>
            </Route>

            <Route path="/profile"
              element={<Profile userToken={userToken} isLoggedIn={isLoggedIn} currentUser={currentUser} setStatus={setStatus} setPosts={setPosts} />}>
            </Route>

            <Route path="/log-in"
              element={<LoginForm setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken} setPosts={setPosts} setStatus={setStatus} />}>
            </Route>

            <Route path="/register"
              element={<RegisterForm setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken} setStatus={setStatus} />}>
            </Route>

            <Route path="/new-post"
              element={<NewPostForm isLoggedIn={isLoggedIn} posts={posts} setPosts={setPosts} setStatus={setStatus} userToken={userToken} />}>
            </Route>

            <Route path="/new-message/:postId"
              element={<MessageForm isLoggedIn={isLoggedIn} userToken={userToken} setStatus={setStatus} />}>
            </Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter >
  );
}

export default App;