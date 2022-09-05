import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMessage, fetchSinglePost } from "../api/apiHelper";

function MessageForm({ isLoggedIn, userToken, setStatus }) {
     const navigate = useNavigate();
     const params = useParams();

     const [post, setPost] = useState([]);
     const [content, setContent] = useState('');

     useEffect(() => {
          Promise.all([fetchSinglePost]).then(async () => {
               const result = await fetchSinglePost(params.postId);
               setPost(result[0]);
          });
     }, [post, params.postId]);

     async function handleSubmit(event) {
          event.preventDefault();

          if (!content) {
               setStatus('Content field is required.');
               return;
          }

          const message = {
               message: {
                    content: content
               }
          };

          Promise.all([createMessage]).then(async () => {
               const result = await createMessage(params.postId, userToken, message);

               if (result) {
                    setStatus('Your message was sent.');

                    // todo: navigate them to a specific post
                    navigate(`/post/${post._id}`);
               }
          });
     }

     if (isLoggedIn)
          return (
               <div>
                    <section className="post">
                         <h2>{post.title}</h2>
                         <p>{post.description}</p>
                    </section>
                    <section className="mt-3">
                         <h1>New Message</h1>
                         <hr />
                         <form onSubmit={handleSubmit}>
                              <div className="mb-3">
                                   <label className="form-label" htmlFor="Content">Content</label>
                                   <input className="form-control" type="text" name="Content"
                                        onChange={(event) => setContent(event.target.value)} />
                              </div>

                              <button className="btn btn-primary" type="submit">Create</button>
                         </form>
                    </section>
               </div>
          );

     return (
          <p>You must be logged in to send a message.</p>
     );
}

export default MessageForm;