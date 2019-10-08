import React, { Component } from 'react';

import styles from './layout-main.module.css';
import router from  '../../../router';

class MainContent  extends Component{
    render(){
        const wrapperClass = `${styles.wrapper} default-page-wrapper`;
        return (
            <div className={wrapperClass}>
              {router()}
            </div>
        );
    }
}

export default MainContent;

