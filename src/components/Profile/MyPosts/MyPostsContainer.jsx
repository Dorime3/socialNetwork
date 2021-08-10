import React from 'react';
import Post from './Post/Post'
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.PostData.map(el => (
            <Post message={el.message} likesCount={el.likesCount} />
        ))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPost: (newMessagePost) => {
            dispatch(addPostActionCreator(newMessagePost));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;