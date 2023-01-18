import React from 'react';
import c from "./content.module.css"
import Profile from './Profile/Profile';
import MyPost from './Profile/myPost-container';

const Content = (props) => {
    return (
        <div className={c.content} >
            <Profile setPhoto={props.setPhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPost/>
           </div> 
    )
}
export default Content
