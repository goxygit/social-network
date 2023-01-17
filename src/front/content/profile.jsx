import React from 'react';
import c from "./content.module.css"
import Profile from './content/Profile';
import MyPost from './content/myPost-container';

const Content = (props) => {
    return (
        <div className={c.content} >
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPost/>
           </div> 
    )
}
export default Content
