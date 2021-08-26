import React, { useState, useEffect } from 'react'


export const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [!props.status]);


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'Что нового?'}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status} />
                </div>}
        </>
    )
}