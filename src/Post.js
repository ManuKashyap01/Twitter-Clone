import React from 'react'
import avatarImg from './avatar.png' //Importing the image to be able to use it in this component
import { Avatar } from '@material-ui/core'
import './Post.css'
import { VerifiedUser,ChatBubbleOutline,Repeat,FavoriteBorder,Publish } from '@material-ui/icons'
const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatarImg}/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Manu kashyap
                        <span className='post__headerSpecial'>
                            <VerifiedUser className='post__badge'/> @mankas
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Hey! Come and learn react with me.</p>
                </div>
            </div>
            <img src='https://media2.giphy.com/media/gGx3NyO61GnvZK4HhE/giphy.gif?cid=ecf05e47yofuym851ueph5wp3ogx2xqomfcikbt3ty45cvil&rid=giphy.gif&ct=g'/>
            <div className='post__footer'>
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorder fontSize='small'/>
                <Publish fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post