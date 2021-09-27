import React from 'react';
import s from './MyPosts.module.css'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsContriols/FormsControls';
import Post from './Post/Post';
import { PostType } from '../../../types/types';

const maxLength30 = maxLength(30)

export type AddPostFormValuesType = {
    addPost: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
    posts: Array<PostType>
}
export type MapDispatchPropsType = {
    addPostActionCreator: (addPost: string) => void
    deletePost: (id: number) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    const onSubmitForm = (formData: AddPostFormValuesType) => {
        props.addPostActionCreator(formData.addPost)
    }
    const deletePostMessage = (id: number) => {
        props.deletePost(id)
    }
    const posts = props.posts.reverse().map(el => (
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} deletePostMessage={deletePostMessage} />
    ))
    return (
        <div className={s.postBlock}>
            <h3>MyPosts</h3>
            <MyPostsFormRedux onSubmit={onSubmitForm} />
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}





const MyPostsForm: React.FC<InjectedFormProps<AddPostFormValuesType, {}> & {}> = (props) => {
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

const MyPostsFormRedux = reduxForm<AddPostFormValuesType>({ form: 'addProfilePost' })(MyPostsForm)
export default MyPosts;