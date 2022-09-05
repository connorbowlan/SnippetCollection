import { deletePost, fetchAllPosts } from "../api/apiHelper";
import { Link } from "react-router-dom";
import { useState } from "react";

function Posts({ isLoggedIn, userToken, posts, setPosts, setStatus }) {
     const [searchTerm, setSearchTerm] = useState('');

     async function handleSearch(event) {
          event.preventDefault();

          const filteredPosts = posts.filter(post => postMatches(post, searchTerm));

          setPosts(filteredPosts);
     }

     function postMatches(post, text) {
          if(post.title.includes(text))
               return post;
     }

     async function handleDelete(id) {
          Promise.all([deletePost, fetchAllPosts]).then(async () => {
               const result = await deletePost(id, userToken);

               if (result) {
                    setStatus('The post was deleted.');
                    setPosts(await fetchAllPosts());
               }
          });
     }

     return (
          <div>
               <section>
                    <form onClick={handleSearch}>
                         <div className="row g-1 mb-3">
                              <div className="col-auto">
                                   <input className="form-control" type="text" name="Search"
                                        onChange={(event) => setSearchTerm(event.target.value)} />
                              </div>

                              <div className="col-auto">
                                   <button className="btn btn-secondary" type="submit">Search</button>
                              </div>
                         </div>
                    </form>
               </section>
               {posts.map((item) =>
                    <section key={item._id} className="post">
                         <h2>{item.title}</h2>
                         <p>{item.description}</p>
                         <div><b>Price:</b> {item.price}</div>
                         <div><b>Seller:</b> {item.author.username}</div>
                         <div><b>Location:</b> {item.location}</div>
                         <div><b>Will Deliver:</b> {item.willDeliver ? 'Yes' : 'No'}</div>
                         <br />
                         <div>{isLoggedIn ? <Link to={`/new-message/${item._id}`}>Send Message</Link> : <span></span>}</div>
                         {
                              item.isAuthor ? <button className="btn btn-primary mt-3"
                                   onClick={() => handleDelete(item._id)}>Delete Post</button>
                                   :
                                   <span></span>
                         }
                    </section>
               )}
          </div>
     );
}

export default Posts;