import { ThunkAction } from "redux-thunk";
import { authMeThunkCreator } from "./auth-reducer"
import { AppStateType, InferActionsTypes } from "./redux-store";


const initialState = {
    inizialized: false,
    globalError: null as string | null
}

export type InitialStateType = typeof initialState;


const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INIZIALIZED_APP':
            return {
                ...state,
                inizialized: true
            }
        case 'GET_ERROR':
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;


const actions = {
    inizialize: () => ({ type: 'INIZIALIZED_APP' } as const),
    getError: (error: null | string) => ({ type: 'GET_ERROR', error } as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> // 1. то что возвращается 2. глобальный стейт 3. экстрапараметры 4. тип экшнов

export const inizializedApp = () => (dispatch: any) => { // ??????????
    const promise = dispatch(authMeThunkCreator())
    Promise.all([promise])
        .then(() => dispatch(actions.inizialize()))
}

export const showGetError = (error: null | string) => (dispatch: any) => { // ????????????
    dispatch(actions.getError(error));
    setTimeout(() => dispatch(actions.getError(null)), 5000);
}


export default appReducer;