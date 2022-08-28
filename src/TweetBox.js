import React from 'react'
import avatar from './avatar.png' //Importing the image to be able to use it in this component
import { Avatar,Button } from '@material-ui/core'
import './TweetBox.css'
const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                {/* avatar variable can be used as path to the src of image  */}
                <Avatar src={avatar}/>
                <input placeholder="What's happening?" type='text'/>
            </div>
            <input
             className='tweetBox__imageInput'
             placeholder="Optional: Enter image URL" 
             type='text'
            />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox