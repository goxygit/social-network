import { connect } from "react-redux";
import {addPost, } from '../../../redux/reducer/profilePageReducer'
import { compose } from "redux";
import { withAuthRedirect } from "../../common/withAuthRedirect";
import MyPost from "./myPost";
const mapStateToProps =(state)=>{
    return{
        ProfilePage: state.ProfilePage
    }
}


export default compose(connect(mapStateToProps,{addPost}),withAuthRedirect)(MyPost)