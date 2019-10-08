import React, { Component } from 'react';
import {connect} from 'react-redux'

import styles from './not-found.module.css';


class PageNotFoundComponent  extends Component{
    render(){
        return (
            <div className={styles.error}>
                Страница не найдена. Error 404.
            </div>
        )
    }
}

export default connect()(PageNotFoundComponent);

