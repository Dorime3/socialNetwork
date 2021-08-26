import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsContriols/FormsControls';
import { loginMe } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from './Login.module.css'


const maxLength30 = maxLength(30);

const LoginForm = ({ handleSubmit, error }) => {
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const Login = (props) => {
    const onChangeSubmit = (formData) => {
        props.loginMe(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onChangeSubmit} />
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.auth
})

export default connect(mapStateToProps, { loginMe })(Login)