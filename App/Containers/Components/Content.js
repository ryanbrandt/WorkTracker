import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import {getAuthenticatedStatus} from '../../Auth/selectors';
import AuthContainer from '../Navigators/AuthContainer';
import ContentContainer from '../Navigators/ContentContainer';

import Styles from '../../Styles/Containers/ContainerStyles';

const Content = props => {
  const {authenticated} = props;
  return (
    <View style={Styles.contentContainer}>
      {authenticated ? <ContentContainer /> : <AuthContainer />}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: getAuthenticatedStatus(state),
  };
};

export default connect(
  mapStateToProps,
  null,
)(Content);
