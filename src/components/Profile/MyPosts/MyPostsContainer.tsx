import React from 'react';
import { actions } from '../../../redux/profile-reducer';
import MyPosts, { MapDispatchPropsType, MapStatePropsType } from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.PostData
    } as MapStatePropsType
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         newPost: (newMessagePost) => {
//             dispatch(addPostActionCreator(newMessagePost));
//         }
//     }
// }
const { addPostActionCreator, deletePost } = actions;
const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { addPostActionCreator, deletePost })(MyPosts);


export default MyPostsContainer;