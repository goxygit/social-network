import { NavLink } from "react-router-dom"
const MessageItem = (props) =>{
    let path = "/messages/message/" + props.id
    return (
        <div><NavLink to={path}>{props.name}</NavLink></div>
        
    )
}
export default MessageItem