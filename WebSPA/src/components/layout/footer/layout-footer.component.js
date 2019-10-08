import React, { Component } from 'react';

import styles from './layout-footer.module.css';

class Footer  extends Component{
    render(){
        const wrapperClass =`${styles.wrapper} default-page-wrapper`;
        return (
            <div className={wrapperClass}>
              <div>
                <div>Контакты:</div>
                <div className={styles.linkWrapper}>
                  <a href="mailto: novoposarantu1@gmail.com" className={styles.link}>
                    novoposarantu1@gmail.com
                  </a>
                </div>
                <div className={styles.linkWrapper}>
                  <a href="tel:+79531801740" className={styles.link}>
                    +79531801740
                  </a>
                </div>
              </div>
            </div>
        );
    }
}

export default Footer;

