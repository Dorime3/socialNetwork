import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsContriols/FormsControls';
import { maxLength, required } from '../../utils/validators/validators';



const Dialogs = (props) => {


    if (!props.auth) return <Redirect to='/auth' />
    const onSumbitMessage = (formData) => {
        props.addMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogElements}
            </div>
            <div className={s.messages}>
                <div>{props.MessageElements}</div>
                <AddMessageReduxForm onSubmit={onSumbitMessage} />
            </div>
        </div>
    )
}
const maxLength40 = maxLength(40);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageCreate}>
                <Field component={Textarea} placeholder='Enter your message' name='newMessageBody' validate={[required, maxLength40]} />
                <button >Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({ form: 'addMessageReduxForm' })(AddMessageForm)


export default Dialogs;