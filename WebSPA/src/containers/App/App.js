import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './App.module.css';

import LayoutMain from '../../components/layout/main';
import LayoutHeader from '../../components/layout/header';
import LayoutFooter from '../../components/layout/footer';
import Progress from '../../components/layout/progress';


import {
  getIsContactsLoading
} from '../../ducks/contacts-list';

const mapStateToProps = state =>({
  isLoading: getIsContactsLoading(state),
})

class App extends Component {
  render() {
    const { isLoading } = this.props;
    const wrapperClass = `${styles.wrapper} back-color`;
    return (
      <div id="App" className={wrapperClass}>
        <LayoutHeader />
        <LayoutMain />
        <LayoutFooter />
        {
          isLoading &&
            <Progress />
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));

