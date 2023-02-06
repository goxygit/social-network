import React from "react";
import { useEffect } from "react";
import { useState } from "react";
type PropsType ={
  getStatus: string,
  updateStatus: (status: string) => void
}
const ProfileStatusWithHook: React.FC<PropsType> =({getStatus, updateStatus})=> {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(getStatus)
  useEffect(()=>{
    setStatus(getStatus)
  }, [getStatus])
  const onEdit=()=>{
    setEditMode(true)
  }
  const deactivateEditMode =()=>{
    setEditMode(false)
    updateStatus(status)
  }
  const onChange =(e: any)=>{
    setStatus(e.currentTarget.value)
  }
    return (
      <div>
        {editMode ? (
          <div>
            <input  autoFocus={true} onChange={onChange} value={status} onBlur={deactivateEditMode} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={onEdit}>{getStatus || '------'}</span>
          </div>
        )}
      </div>
    );
  }
export default ProfileStatusWithHook