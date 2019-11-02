import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {validateJWT} from '../Auth/actions';
import {getAuthenticatedStatus} from '../Auth/selectors';

import Colors from '../Styles/Themes/Colors';

class AuthLoadingScreen extends Component {
  async componentDidMount() {
    const {navigation, validateSession, authenticated} = this.props;

    if (authenticated) {
      await validateSession();
    }
    navigation.navigate(authenticated ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grayAccent,
  },
});

const mapStateToProps = state => {
  return {
    authenticated: getAuthenticatedStatus(state),
  };
};

const mpaDispatchToProps = dispatch => {
  return {
    validateSession: () => dispatch(validateJWT()),
  };
};

export default connect(
  mapStateToProps,
  mpaDispatchToProps,
)(AuthLoadingScreen);
