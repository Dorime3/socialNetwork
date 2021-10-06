import React, { useState, useEffect, ChangeEventHandler, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { updateStatus } from '../../../redux/profile-reducer'

type PropsType = {
    status: string
    // updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [!props.status]);

    const dispatch = useDispatch()

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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