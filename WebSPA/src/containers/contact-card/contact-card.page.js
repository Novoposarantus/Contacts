import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './contact-card.module.css';
import TextField from '../../components/form/text-form-field'

import {
    loadContact,
    saveContact,
    updateContact,
    deleteContact,
    getIsContactLoading,
    getContact,
    getContactError,
    clearContactData
} from '../../ducks/contact-card';

const mapStateToProps = state => ({
    contact             : getContact(state),
    isLoading           : getIsContactLoading(state),
    contactRequestError : getContactError(state)
});

const mapDispathToProps = dispatch => ({
    loadContact         : action => loadContact(dispatch, action),
    saveContact         : action => saveContact(dispatch, action),
    updateContact       : action => updateContact(dispatch, action),
    deleteContact       : action => deleteContact(dispatch, action),
    clearContactData    : action => clearContactData(dispatch, action)
});

class ContactsCard  extends Component {

    state = {
        contact: null,
        errors: null,
        toList: false
    }

    submitButtonClass=`${styles.button} ${styles.submitButton}`;
    deleteButtonClass=`${styles.button} ${styles.deleteButton}`;

    async componentDidMount() {
        const { loadContact } = this.props;
        const { contactId } = this.props.match.params;

        await loadContact(contactId);

        const { contact } = this.props;
        this.setState(state=>({
            ...state,
            contact: { ...contact },
            errors: {}
        }));
    }

    componentWillUnmount() {
        const { clearContactData } = this.props;
        clearContactData();
    }

    updateContact = (key, value) => {
        this.setState(state=>({
            ...state,
            errors: {},
            contact: {
                ...state.contact,
                [key]: value
            }
        }));
    }
    
    sendToSaveOrUpdate = async () =>{
        const { contact } = this.state;
        const {saveContact, updateContact} = this.props;

        if(!this.validate()){
            return;
        }

        if (!contact.Id) {
            await saveContact(contact);
        } else {
            await updateContact(contact);
        }

        this.toEdit();
    }

    sendToDelete = async () => {
        const { contact } = this.state;
        const { deleteContact } = this.props;
        if(!contact.Id){
            return;
        }
        await deleteContact(contact.Id);
        this.toEdit();
    }

    toEdit = () => {
        this.setState(state => ({
            ...state,
            toList: true
        }))
    }

    validate = () => {
        const { contact } = this.state;
        let errors = {};
        if (!contact.Name || /^$/.test(contact.Name)) {
            errors.Name = "Введите имя пользователя";
        }
        
        if (!contact.Surname || /^$/.test(contact.Surname)) {
            errors.Surname = "Введите фамилию пользователя";
        }

        if(contact.PhoneNumber && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(contact.PhoneNumber)){
            errors.PhoneNumber = "Введите корректный номер телефона";
        }

        this.setState(state => ({
            ...state,
            errors
        }));

        return Object.entries(errors).length === 0;
    }

    render(){
        const {
            errors,
            contact,
            toList
        } = this.state;

        if (toList) {
          return <Redirect to={`/`} />
        }

        if (!contact) {
            return (
                <div></div>
            )
        }

        return (
            <React.Fragment>
            <div className={styles.nav}>
                <NavLink to="/" className={styles.backLink} >
                    Вернуться к списоку
                </NavLink>
            </div>
            <div className={styles.wrapper}>
                {
                    contact.Id &&(
                        <TextField
                            title="Номер"
                            value={contact.Id}
                            readOnly
                            disabled
                        />  
                    ) 
                }
                <TextField
                    title="Имя"
                    value={contact.Name}
                    error={errors.Name}
                    onChange={(event) => this.updateContact('Name', event)}
                    required
                /> 
                <TextField
                    title="Фамилия"
                    value={contact.Surname}
                    error={errors.Surname}
                    onChange={(event) => this.updateContact('Surname', event)}
                    required
                /> 
                <TextField
                    title="Номер телефона"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={contact.PhoneNumber}
                    error={errors.PhoneNumber}
                    onChange={(event) => this.updateContact('PhoneNumber', event)}
                /> 
                <TextField
                    title="Почта"
                    type="email"
                    value={contact.Email}
                    error={errors.Email}
                    onChange={(event) => this.updateContact('Email', event)}
                /> 
            </div>
            <div className={styles.actions}>
                {
                    contact.Id && (
                        <button
                            onClick={this.sendToDelete}
                            className={this.deleteButtonClass}
                        >
                            Удалить
                        </button>
                    ) 
                }
                <button 
                    onClick={this.sendToSaveOrUpdate}
                    className={this.submitButtonClass}
                >
                    Cохранить
                </button>
            </div>
            </React.Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(ContactsCard);

