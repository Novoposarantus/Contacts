import { combineReducers } from 'redux';

import contactsList from './contacts-list';
import contactCard from './contact-card';

export default combineReducers({
    contactsList,
    contactCard
})