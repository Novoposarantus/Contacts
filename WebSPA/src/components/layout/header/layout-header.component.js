import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './layout-header.module.css';

class Header  extends Component{
    render(){
        const contentClass = `${styles.content} default-page-wrapper`
        return (
            <div className={styles.wrapper}>
                <div className={contentClass}>
                    <div className={styles.headerText}>
                        <NavLink to="/">
                            Тестовое задание
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

