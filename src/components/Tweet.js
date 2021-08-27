
import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

import { ICON_LOGO } from '../Icons'
import LikeButton from "./Likebutton";


function Tweet (props){

  

  
    return (
      <div className='tweet'>
        <img src="https://gravatar.com/avatar/nothing" alt='avatar' className='twtusersnap'/>
   
    <div className="content">
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">{props.Tweethandle}</span>
    </span>
    <span className="time"> {props.tweetTime}</span>
    <div className="twtmsg">{props.TweetMessage}</div>
      <div class="button">
      <input 
                type="checkbox" 
                checked={props.liked} 
                onChange={() => props.handleChange(props.userID)}
            />
      </div>
    </div>
  </div>

  
  )

  
    

}

export default Tweet