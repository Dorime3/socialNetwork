import { applyMiddleware, combineReducers, createStore, compose, Action } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...params: any[]) => any }> = ReturnType<PropertiesTypes<T>>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A> // 1. то что возвращается 2. глобальный стейт 3. экстрапараметры 4. тип экшнов

type ReducerType = typeof reducers; // state на входе
export type AppStateType = ReturnType<ReducerType> // state на выходе (позволяет видеть приходящие параметры в state)

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));



export default store;

