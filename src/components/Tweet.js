
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
      <span className="handle">{props.item.Tweethandle}</span>
    </span>
    <span className="time">3h ago</span>
    <div className="twtmsg">{props.item.TweetMessage}</div>
      <div class="button">
      <input 
                type="checkbox" 
                checked={props.liked} 
                onChange={() => props.handleChange(props.item.id)}
            />
      </div>
    </div>
  </div>

  
  )

  
    

}

export default Tweet