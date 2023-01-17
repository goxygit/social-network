import React from 'react';
import n from "./navbar.module.css"
import { NavLink } from 'react-router-dom';
const SideBar = () =>{
    return(
        <nav className={n.nav}>
            <div><NavLink className={n.navLinks} to={"/profile"}>Profile</NavLink></div>
            <div><NavLink className={n.navLinks} to={"/message"}>Messages</NavLink></div>
            <div><NavLink className={n.navLinks} to={"#"}>News</NavLink></div>
            <div><NavLink className={n.navLinks} to={"#"}>Music</NavLink></div> <br /> 
            <div><NavLink className={n.navLinks} to={"/friends"}><h1>Friends</h1></NavLink></div> <br />
            <div><NavLink className={n.navLinks} to={"#"}>Setting</NavLink></div> 
        </nav>
        
    )
}
export default SideBar