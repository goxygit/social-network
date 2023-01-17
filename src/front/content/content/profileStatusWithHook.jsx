import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const ProfileStatusWithHook =(props)=> {
  const [editMode, setEditMode] = useState(false)
  const [status, setStaus] = useState(props.status)
  useEffect(()=>{
    setStaus(props.status)
  }, [props.status])
  const onEdit=()=>{
    setEditMode(true)
  }
  const deactivateEditMode =()=>{
    setEditMode(false)
    props.updateStatus(status)
  }
  const onChange =(e)=>{
    setStaus(e.currentTarget.value)
  }
    return (
      <div>
        {editMode ? (
          <div>
            <input  autoFocus={true} onChange={onChange} value={props.status} onBlur={deactivateEditMode} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={onEdit}>{props.status || '------'}</span>
          </div>
        )}
      </div>
    );
  }
export default ProfileStatusWithHook