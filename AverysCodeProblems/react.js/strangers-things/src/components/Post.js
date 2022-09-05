import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../api/apiHelper";

function Post() {
     const params = useParams();
     const [post, setPost] = useState([]);

     useEffect(() => {
          Promise.all([fetchSinglePost]).then(async () => {
               const result = await fetchSinglePost(params.postId);
               setPost(result[0]);
          });
     }, [post, params.postId]);

     return (
          <div>
               <section key={post._id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <div><b>Price:</b> {post.price}</div>
                    <div><b>Location:</b> {post.location}</div>
                    <div><b>Will Deliver:</b> {post.willDeliver ? 'Yes' : 'No'}</div>
               </section>
          </div>
     );

}

export default Post;