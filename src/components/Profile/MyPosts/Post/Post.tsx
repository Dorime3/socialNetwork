import React from 'react';
import { PostType } from '../../../../types/types';
import s from './Post.module.css'

type MapStatePropsType = {
    message: string,
    likesCount: string,
    id: number
}

type MapDispatchPropsType = {
    deletePostMessage: (id: number) => void
}

const Post: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/a0/a9/77/a0a977805b7adf3522f790b703558afa.jpg' />
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
            <button onClick={() => props.deletePostMessage(props.id)}>delete this</button>
        </div>
    )
}

export default Post;