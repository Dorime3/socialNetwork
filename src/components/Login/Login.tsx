import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsContriols/FormsControls';
import { loginMe } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from './Login.module.css'
import { AppStateType } from '../../redux/redux-store';


const maxLength30 = maxLength(30);
type LoginFormOwnProps = {
    url: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, url }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'} component={Input} placeholder={'Login'} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} validate={[required]} type='password' />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
            </div>
            {error && <div className={style.summaryError}>
                {error}
            </div>}
            {url && <img src={url} alt='captcha' className={style.captchaImg} />}
            {url && <Field name={'captcha'} component={Input} placeholder={'captcha'} validate={[required]} />}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'loginForm'
})(LoginForm)

// type MapStatePropsType = {
//     url: string | null,
//     isAuth: boolean
// }
// type MapDispatchPropsType = {
//     loginMe: (email: string, password: string, rememberMe: boolean, captcha: string) => void
// }

// type PropsType = MapStatePropsType & MapDispatchPropsType
type LoginFormValuesType = {
    password: string,
    email: string,
    rememberMe: boolean,
    captcha: string
}

export const Login = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.auth)
    const url = useSelector((state: AppStateType) => state.auth.url)
    const dispatch = useDispatch()
    const onChangeSubmit = (formData: LoginFormValuesType) => {
        dispatch(loginMe(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return <>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onChangeSubmit} url={url} />
    </>
}
// const Login: React.FC<PropsType> = (props) => {
//     const onChangeSubmit = (formData: LoginFormValuesType) => {
//         props.loginMe(formData.email, formData.password, formData.rememberMe, formData.captcha)
//     }
//     if (props.isAuth) {
//         return <Redirect to='/profile' />
//     }
//     return (
//         <>
//             <h1>Login</h1>
//             <ReduxLoginForm onSubmit={onChangeSubmit} url={props.url} />
//         </>
//     )
// }

// const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
//     isAuth: state.auth.auth,
//     url: state.auth.url
// })

// export default connect(mapStateToProps, { loginMe })(Login)