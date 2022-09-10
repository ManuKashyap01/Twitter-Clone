import React,{useState} from 'react'
import avatar from './avatar.png' //Importing the image to be able to use it in this component
import { Avatar,Button } from '@material-ui/core'
import './TweetBox.css'
import db from './Firebase'


const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")
  const sendTweet=(e)=>{
    e.preventDefault()
    
    //Add the following post in our collection in firebase firestore
    db.collection('posts').add({
      avatar:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png',
      displayName:'Manu Kashyap',
      username:'ManKas',
      verified:true,
      text:tweetMessage,   
      image:tweetImage
    })

    setTweetImage("")
    setTweetMessage("")

  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                {/* avatar variable can be used as path to the src of image  */}
                <Avatar src={avatar}/>
                <input 
                  onChange={e=>setTweetMessage(e.target.value)}
                  value={tweetMessage} 
                  placeholder="What's happening?" 
                  type='text'
                />
            </div>
            <input
              onChange={e=>setTweetImage(e.target.value)}
              className='tweetBox__imageInput'
              value={tweetImage}
              placeholder="Optional: Enter image URL" 
              type='text'
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox