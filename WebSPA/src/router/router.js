import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ContactsListPage from '../containers/contacts-list';
import EditContactPage from '../containers/contact-card';
import PageNotFound from '../containers/page-not-found';

export default ()=>{
    return (
        <Switch>
            <Route path='/' exact component={ContactsListPage} />
            <Route path='/edit-contact/:contactId' component={EditContactPage}/>
            <Route path='/edit-contact' component={EditContactPage}/>
            <Route path='*' exact={true} component={PageNotFound} />
        </Switch>
    )
}