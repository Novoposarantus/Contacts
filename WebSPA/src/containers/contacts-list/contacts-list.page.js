import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './contacts-list.module.css';
import addContactIcon from '../../images/addIcon.png';

import {
    getContacts,
    loadContacts,
    getContactsError
} from '../../ducks/contacts-list';

const mapStateToProps = state => ({
    contacts: getContacts(state),
    contactsRequestError: getContactsError(state)
});

const mapDispathToProps = dispatch => ({
    loadContacts: () => loadContacts(dispatch)
});

function pad(a,b) { return (1e15+a+"").slice(-b) }

class ContactsList  extends Component {
    state = {
        toEditId: -1
    }

    toEdit(id) {
        this.setState(state =>({
            ...state,
            toEditId: id
        }));
    }

    async componentDidMount() {
        const { loadContacts } = this.props;
        await loadContacts();
    }

    render(){
        const { contacts } = this.props;
        const { toEditId } = this.state;
        if (toEditId > 0) {
          return <Redirect to={`/edit-contact/${toEditId}`} />
        }

        return (
            <React.Fragment>
                <div className={styles.actions}>
                    <NavLink to="/edit-contact">
                        <img 
                            className={styles.icon}
                            src={addContactIcon} 
                            alt="addContactIcon" 
                        />
                    </NavLink>
                </div>
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.headerLine}>
                                <th>Номер</th>
                                <th>ФИО</th>
                                <th>Номер телефона</th>
                                <th>Почта</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map(contact => (
                                    <tr className={styles.bodyLine}
                                        key={contact.Id}
                                        onClick={() => this.toEdit(contact.Id)}
                                    >
                                        <td>{pad(contact.Id, 5)}</td>
                                        <td>{contact.Surname} {contact.Name}</td>
                                        <td>{contact.PhoneNumber}</td>
                                        <td>{contact.Email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(ContactsList);

