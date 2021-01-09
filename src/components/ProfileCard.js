import React from 'react'
import './styles/ProfileCard.css'

import profile from './images/mypic.jpg'
function ProfileCard() {
    return (
        
		<div className="contactpage">
		<div class="profile-card">
    <div class="card-header">
      <div class="pic">
        <img src={profile} alt=""/>
      </div>
      <div class="name">Thasanthan</div>
      <div class="desc">Developer & YouTuber</div>
      <div class="sm">
        <a href="https://www.facebook.com/codethamizhathasatech" class="fab fa-facebook-f"></a>
        <a href="https://mobile.twitter.com/ThamizhaCode" class="fab fa-twitter"></a>
        <a href="https://github.com/Thasanthan-codethamizha" class="fab fa-github"></a>
        <a href="https://www.youtube.com/channel/UCmc1GRcWKWuxqhA5gZArasw" class="fab fa-youtube"></a>
      </div>
      <a href="mailto:sivakumarthasanthan@gmail.com" class="contact-btn">Contact Me</a>
    </div>
    <div class="card-footer">
      <div class="numbers">
        <div class="item">
          <span>250+</span>
          FB Following
        </div>
        <div class="border"></div>
        <div class="item">
          <span>80+</span>
          Videos
        </div>
        <div class="border"></div>
        <div class="item">
          <span>1K+</span>
          Subscribers
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default ProfileCard
