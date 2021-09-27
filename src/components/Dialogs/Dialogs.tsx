import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsContriols/FormsControls';
import { maxLength, required } from '../../utils/validators/validators';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { initialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
    dialogsPage: initialStateType
    addMessage: (messageText: string) => void
};

export type NewMessageFormType = {
    newMessageBody: string
}
//type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>

const Dialogs: React.FC<PropsType> = (props) => {

    const onSumbitMessage = (formData: NewMessageFormType) => {
        props.addMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogsPage.DialogData.map(el => (
                    <DialogItem name={el.name} id={el.id} img={el.img} />
                ))}
            </div>
            <div className={s.messages}>
                <div>{props.dialogsPage.MessageData.map(el => (
                    <Message message={el.message} />
                ))}</div>
                <AddMessageReduxForm onSubmit={onSumbitMessage} />
            </div>
        </div>
    )
}
const maxLength40 = maxLength(40);

type PropsTypeReduxForm = {

}
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsTypeReduxForm> & PropsTypeReduxForm> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageCreate}>
                <Field component={Textarea} placeholder='Enter your message' name='newMessageBody' validate={[required, maxLength40]} />
                <button >Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<NewMessageFormType, PropsTypeReduxForm>({ form: 'addMessageReduxForm' })(AddMessageForm)

export default Dialogs;