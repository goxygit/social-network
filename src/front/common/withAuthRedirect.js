import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect =(Component)=>{
    class withAuth extends React.Component {
        render(){
            if(!this.props.isAuth) return <Navigate to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponet = connect(mapStateToProps)(withAuth)
    return ConnectedAuthRedirectComponet
}