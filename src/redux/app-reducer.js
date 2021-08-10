import { authMeThunkCreator } from "./auth-reducer"

const initialState = {
    inizialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIZIALIZED_APP':
            return {
                ...state,
                inizialized: true
            }
        default:
            return state
    }
}

export const inizialize = () => ({ type: 'INIZIALIZED_APP' })

export const inizializedApp = () => dispatch => {
    const promise = dispatch(authMeThunkCreator())
    Promise.all([promise])
        .then(() => dispatch(inizialize()))
}

export default appReducer;