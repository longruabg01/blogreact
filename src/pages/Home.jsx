import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className='homePage'>
      {postLists.map((post) => {
        return (
          <div className='post'>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => { deletePost(post.id) }}> <i class="fa-regular fa-trash-can"></i></button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="postUser">
              <img src={post.author.picture} />
              <h3>{post.author.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home;