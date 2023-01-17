import React from 'react';
import { NavLink } from 'react-router-dom';
import h from "./header.module.css"
const Header = (props) =>{
    return(
    <div className={h.header}>
        <div>
            {props.isAuth ? <div>{props.login}<button onClick={props.logout}>kurwa</button></div> 
            : <NavLink to='/login'>
                login
            </NavLink>}
            
        </div>
    </div>
    )
    
}
export default Header