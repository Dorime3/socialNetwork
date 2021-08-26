import React from 'react';
import { addPostActionCreator, deletePost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.PostData
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         newPost: (newMessagePost) => {
//             dispatch(addPostActionCreator(newMessagePost));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator, deletePost })(MyPosts);


export default MyPostsContainer;