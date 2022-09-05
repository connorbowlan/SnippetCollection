import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/apiHelper";

function NewPostForm({ isLoggedIn, posts, setPosts, userToken, setStatus }) {
     const navigate = useNavigate();
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [price, setPrice] = useState('');
     const [location, setLocation] = useState('');
     const [willingToDeliver, setWillingToDeliver] = useState(false);

     async function handleSubmit(event) {
          event.preventDefault();

          if(!title || !description || !price)
          {
               setStatus('Title, Description, and Price fields are required.');
               return;
          }
          
          const post = {
               post: {
                    title: title,
                    description: description,
                    price: price,
                    location: location !== null ? '[On Request]' : location,
                    willDeliver: willingToDeliver
               }
          };

          Promise.all([createPost]).then(async () => {
               const result = await createPost(post, userToken);

               if (result) {                    
                    setPosts([result, ...posts]);

                    setStatus('Your post was created.');

                    navigate('/posts');
               }
          });
     }

     if(isLoggedIn)
          return (
               <section>
                    <h1>New Post</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                         <div className="mb-3">
                              <label className="form-label" htmlFor="Title">Title</label>
                              <input className="form-control" type="text" name="Title"
                                   onChange={(event) => setTitle(event.target.value)} />
                         </div>

                         <div className="mb-3">
                              <label className="form-label" htmlFor="Description">Description</label>
                              <input className="form-control" type="text" name="Description"
                                   onChange={(event) => setDescription(event.target.value)} />
                         </div>

                         <div className="mb-3">
                              <label className="form-label" htmlFor="Price">Price</label>
                              <input className="form-control" type="text" name="Price"
                                   onChange={(event) => setPrice(event.target.value)} />
                         </div>

                         <div className="mb-3">
                              <label className="form-label" htmlFor="Title">Location</label>
                              <input className="form-control" type="text" name="Location"
                                   onChange={(event) => setLocation(event.target.value)} />
                         </div>

                         <div className="mb-3 form-check">
                              <input className="form-check-input" type="checkbox" id="WillingToDeliver"
                                   onChange={(event) => setWillingToDeliver(!willingToDeliver)} />
                              <label className="form-check-label" htmlFor="WillingToDeliver">Willing to Deliver?</label>
                         </div>

                         <button className="btn btn-primary" type="submit">Create</button>
                    </form>
               </section>
          );

     return (
          <p>You must be logged in to create a new post.</p>
     );
}

export default NewPostForm;