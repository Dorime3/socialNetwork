import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messageText: state.dialogsPage.MessageText,
        DialogElements: state.dialogsPage.DialogData.map(el => (
            <DialogItem name={el.name} id={el.id} img={el.img} />
        )),
        MessageElements: state.dialogsPage.MessageData.map(el => (
            <Message message={el.message} id={el.id} />
        ))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageBody) => {
            dispatch(addMessageActionCreator(messageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs)