import React, { Component } from 'react';

import styles from './progress.module.css';

class ProgressBar  extends Component{
    render(){
        return (
            <div className={styles.wrapper}>
                <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}

export default ProgressBar;

