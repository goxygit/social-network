import React from "react";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
   onEdit=()=>{
    this.setState({
        editMode:true
    })
   }
   onNoEdit=()=>{
    this.setState({
        editMode:false
    })
    this.props.updateStatus(this.state.status)
   }
   onUpdateStatus=(e)=>{
    this.setState({
      status: e.currentTarget.value
    })
   }
   componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
   }
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input onChange={this.onUpdateStatus} onBlur={this.onNoEdit} autoFocus={true} value={this.state.status} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.onEdit}>{this.props.status || '------'}</span>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus