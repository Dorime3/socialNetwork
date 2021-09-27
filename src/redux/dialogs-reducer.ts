import { InferActionsTypes } from "./redux-store";

type MessageDataType = {
    message: string,
    id: string
}

type DialogsDataType = {
    name: string,
    id: string,
    img: string
}

const initialState = {
    MessageData: [
        { message: 'HI', id: '1' },
        { message: 'How are you?', id: '2' },
        { message: 'YO', id: '3' }
    ] as Array<MessageDataType>,
    DialogData: [
        { name: 'Rodion', id: '1', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
        { name: 'Artem', id: '2', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
        { name: 'Vlad', id: '3', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
        { name: 'Sasha', id: '4', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
        { name: 'Yulia', id: '5', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' },
        { name: 'Kamilla', id: '6', img: 'https://i.pinimg.com/originals/30/c9/86/30c986e10703ca3a76f0db7deb5bc1c9.jpg' }
    ] as Array<DialogsDataType>
}

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SEND_MESSAGE': {
            const messagePost = {
                message: action.messageBody,
                id: '7'
            }
            let stateCopy = {
                ...state,
                MessageData: [...state.MessageData, messagePost],
            };
            return stateCopy;
        }
        default:
            return state;
    }
}

export const actions = {
    addMessage: (messageBody: string) => ({
        type: 'auth/SEND_MESSAGE',
        messageBody
    } as const)
}



export default dialogsReducer;