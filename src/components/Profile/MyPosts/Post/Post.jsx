import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/a0/a9/77/a0a977805b7adf3522f790b703558afa.jpg' />
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;