import { PostType, ProfileType } from "../types/types";
import profileReducer, { actions } from "./profile-reducer";

const state = {
    PostData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
        { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
        { id: 3, message: 'Blabla', likesCount: '0 likes' },
        { id: 4, message: 'Blabla', likesCount: '0 likes' }
    ],
    userProfile: null,
    status: ''
}

it('length of posts should be incremented', () => {
    const action = actions.addPostActionCreator('ну привет')
    let newPost = profileReducer(state, action);
    expect(newPost.PostData.length).toBe(5)
});

it('the text of post with id=5 should be correct', () => {
    const action = actions.addPostActionCreator('ну привет')
    let newPost = profileReducer(state, action);
    expect(newPost.PostData[4].message).toBe('ну привет')
});

it('length of posts after deleting should be correct', () => {
    const action = actions.deletePost(1)
    let newPost = profileReducer(state, action);
    expect(newPost.PostData.length).toBe(3)
});