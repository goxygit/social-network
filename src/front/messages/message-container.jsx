import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../redux/reducer/dialogsReducer";
import { withAuthRedirect } from "../common/withAuthRedirect";
import Mess from "./message";

const mapStateToProps = (state)=>{
    return{
        DialogsPage: state.DialogsPage
    }
}

export default compose(connect(mapStateToProps,{sendMessage}),withAuthRedirect)(Mess)
