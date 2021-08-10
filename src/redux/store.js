import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            PostData: [
                { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
                { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
                { id: 3, message: 'Blabla', likesCount: '0 likes' },
                { id: 4, message: 'Blabla', likesCount: '0 likes' }
            ],
            PostText: 'Введите сообщение'
        },
        dialogsPage: {
            MessageData: [
                { message: 'HI', id: '1' },
                { message: 'How are you?', id: '2' },
                { message: 'YO', id: '3' }
            ],
            DialogData: [
                { name: 'Rodion', id: '1', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
                { name: 'Artem', id: '2', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
                { name: 'Vlad', id: '3', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
                { name: 'Sasha', id: '4', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
                { name: 'Yulia', id: '5', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
                { name: 'Kamilla', id: '6', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' }
            ],
            MessageText: ''
        },
        sidebar: {
            friends: [
                { name: 'Serega', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
                { name: 'Semen', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' },
                { name: 'Masha', avatar: 'https://tattoo-stickers.ru/34939-thickbox_default/nichosi.jpg' }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state was changed');
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
}


window.store = store;

export default store;