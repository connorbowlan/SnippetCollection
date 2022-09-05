import { deletePost, fetchAllPosts } from "../api/apiHelper";


function Profile({ userToken, isLoggedIn, currentUser, setStatus, setPosts }) {
     const posts = currentUser.posts;
     const messages = currentUser.messages;

     async function handleDelete(id) {
          Promise.all([deletePost, fetchAllPosts]).then(async () => {
               const result = await deletePost(id, userToken);

               if (result) {
                    setStatus('The post was deleted.');
                    setPosts(await fetchAllPosts());
               }
          });
     }

     if (isLoggedIn)
          return (
               <div>
                    <h1>Messages to Me</h1>
                    {messages.map((item) =>
                         <section key={item._id} className="post">
                              <div><b>Post:</b> {item.post.title}</div>
                              <div><b>From:</b> {item.fromUser.username}</div>
                              <div><b>Message:</b> {item.content}</div>
                         </section>
                    )}

                    <hr />

                    <h1>My Posts</h1>
                    {posts.map((item) =>
                         <section key={item._id} className="post">
                              <h2>{item.title}</h2>
                              <p>{item.description}</p>
                              <div><b>Price:</b> {item.price}</div>
                              <div><b>Location:</b> {item.location}</div>
                              <div><b>Will Deliver:</b> {item.willDeliver ? 'Yes' : 'No'}</div>
                              <button className="btn btn-primary mt-3"
                                   onClick={() => handleDelete(item._id)}>Delete Post</button>
                         </section>
                    )}
               </div>
          );

     return (
          <p>You must be logged in to view your profile.</p>
     );
}

export default Profile;