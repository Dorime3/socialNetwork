import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

it('length of posts should be incremented', () => {
    const state = {
        PostData: [
            { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
            { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
            { id: 3, message: 'Blabla', likesCount: '0 likes' },
            { id: 4, message: 'Blabla', likesCount: '0 likes' }
        ]
    }
    const action = addPostActionCreator('ну привет')
    let newPost = profileReducer(state, action);
    expect(newPost.PostData.length).toBe(5)
});

it('the text of post with id=5 should be correct', () => {
    const state = {
        PostData: [
            { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
            { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
            { id: 3, message: 'Blabla', likesCount: '0 likes' },
            { id: 4, message: 'Blabla', likesCount: '0 likes' }
        ]
    }
    const action = addPostActionCreator('ну привет')
    let newPost = profileReducer(state, action);
    expect(newPost.PostData[4].message).toBe('ну привет')
});

it('length of posts after deleting should be correct', () => {
    const state = {
        PostData: [
            { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
            { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
            { id: 3, message: 'Blabla', likesCount: '0 likes' },
            { id: 4, message: 'Blabla', likesCount: '0 likes' }
        ]
    }
    const action = deletePost(1)
    let newPost = profileReducer(state, action);
    expect(newPost.PostData.length).toBe(3)
});