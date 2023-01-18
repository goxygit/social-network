import React from 'react';
import Profile from './profile';
import { withAuthRedirect } from '../common/withAuthRedirect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProfileThunk, getStatus, updateStatus, setPhoto } from '../../redux/reducer/profilePageReducer';
import {
    useParams,
} from "react-router-dom";
class ProfileContainer extends React.Component  {
    refreshProfile (){
        let userId =this.props.param.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getProfileThunk(userId)
        this.props.getStatus(userId)
    }
    componentDidMount(){
        this.refreshProfile()
    } 
    componentDidUpdate(prevProps, prevState){
       if(this.props.param.userId !== prevProps.param.userId){
        let userId =this.props.param.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getProfileThunk(userId)
        this.props.getStatus(userId)
       }
    } 
    
   render()
   { 
     return (
        
            <Profile {...this.props} setPhoto={this.props.setPhoto} isOwner ={!this.props.param.userId} profile={this.props.profile} updateStatus={this.props.updateStatus} status={this.props.status}/>
           
    )
}}
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}



const mapStateToProps =(state)=>{
    return{
        profile: state.ProfilePage.userProfile,
        status: state.ProfilePage.status,
        authUserId:state.auth.userId
    }
}
export default compose(connect(mapStateToProps,{getProfileThunk, getStatus, updateStatus, setPhoto}),withAuthRedirect)(TakeParams)
