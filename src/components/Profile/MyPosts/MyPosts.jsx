import React from 'react';
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsContriols/FormsControls';

const maxLength30 = maxLength(30)

const MyPosts = (props) => {
    const onSubmitForm = (formData) => {
        props.newPost(formData.addPost)
    }
    return (
        <div className={s.postBlock}>
            <h3>MyPosts</h3>
            <MyPostsFormRedux onSubmit={onSubmitForm} />
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>
    )
}

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'addPost'}
                    component={Textarea}
                    placeholder='Введите сообщение'
                    validate={[required, maxLength30]} />
            </div>
            <button >Add post</button>
        </form >
    )
}

const MyPostsFormRedux = reduxForm({ form: 'addProfilePost' })(MyPostsForm)
export default MyPosts;