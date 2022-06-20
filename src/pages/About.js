import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src= {profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rahul Gaikwad</div>
            <div className="brief_description">
              Hey there! I am Rahul Gaikwad. I am currently pursuing a master's degree in Information Technology and Management from the University of Texas at Dallas. I am a passionate learner and love to explore new things. In my free time, I love to play chess and keep myself updated on the new emerging technology.
            </div>
          </div>
        </div> 
      </div>
    )
  }
}