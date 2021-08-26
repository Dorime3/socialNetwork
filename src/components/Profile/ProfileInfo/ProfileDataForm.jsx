import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsContriols/FormsControls';
import s from './ProfileInfo.module.css'

const ProfileDataForm = (props) => {
    return (
        <form className={s.profileData} onSubmit={props.handleSubmit}>
            <div><button>save</button></div>
            {props.error && <div className={s.summaryError}>{props.error}</div>}
            <div>
                <b>Full name:</b>
                <Field name={'fullName'} component={Input} placeholder={'enter your name'} />
            </div>
            <div>
                <b>Are you look for a job?</b>
                <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
            </div>
            <div>
                <b>My professional skills:</b>
                <Field name={'lookingForAJobDescription'} component={Textarea} placeholder={'Describe your professional skills'} />
            </div>
            <div>
                <b>About me:</b>
                <Field name={'aboutMe'} component={Textarea} placeholder={'About me'} />
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(el => {
                    return <FormContact key={el} title={el} />
                })}
            </div>
        </form>
    )
}

const FormContact = ({ title, name }) => {
    return (
        <div className={s.profileContacts}>
            <b>{title}</b>
            <Field name={'contacts.' + title} component={Input} placeholder={title} />
        </div>
    )
}

const ReduxProfileDataForm = reduxForm({
    form: 'profileDataForm'
})(ProfileDataForm)



export default ReduxProfileDataForm;