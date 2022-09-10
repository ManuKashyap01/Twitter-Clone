import React from 'react'
import { 
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'
import './Widget.css'

const Widget = () => {
  return (
    <div className='widget'>
      <div className='widget__input'>
        <SearchIcon className='widget__searchIcon'/>
        <input placeholder='Search Twitter' type='text'/>
      </div>
      <div className='widget__widgetContainer'>
        <h2>What's Happening</h2>
        {/* This pulls out a post from given tweetId from twitter */}
        <TwitterTweetEmbed tweetId={'858551177860055040'}/>
        {/* This pulls out the timeline of the profile with given screenName */}
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='cleverqazi'
          options={{height:400}}
        />

        {/* What this twitter do is it redirects you to original twitter page and open tweet box with the contents present in options */}
        <TwitterShareButton
        // redirected to clever programmer youtube channel
          url={'https://www.youtube.com/watch?v=rJjaqSTzOxI&t=4090s'}
          options={{text:'#reactjs is awesome', via:'cleverqazi'}}
        />
      </div>
    </div>
  )
}

export default Widget