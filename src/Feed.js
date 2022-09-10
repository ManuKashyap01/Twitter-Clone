import React, { useState , useEffect} from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
// import avatarImg from './avatar.png' //Importing the image to be able to use it in this component
import db from './Firebase'
import './Feed.css'
const Feed = () => {
  const [posts, setPosts] = useState([]) //default value of posts is set to []
  
  // useEffect(() => {
  // this will run when the Feed component loads as well as when the conditions variable changes
  // }, [conditions])
  useEffect(() => {
    // db.collection('posts') this refers to online collection that we have created on firebase firestore database
    // onSnapshot() is like taking the snapshot of entire collection
    //there may be different posts that can be found under snapshot.docs and we map over these posts
    //each doc has an object of data fields and values that we require
    db.collection('posts').onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>doc.data()))
    ))
  }, [])
  
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        {/* TweetBox */}
        <TweetBox/>
        
        {/* Post */}
        {posts.map(post=>(
          <Post 
            avatar={post.avatar}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}            
            image={post.image}
          />
        ))}
        
        {/* Post */}
        {/* Post */}
        {/* Post */}

    </div>
  )
}

export default Feed