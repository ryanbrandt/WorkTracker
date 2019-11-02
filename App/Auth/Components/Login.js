import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {requestAuthorization} from '../actions';

import AppForm from '../../Common/Components/AppForm';

import Styles from '../../Styles/Containers/ContainerStyles';
import ElementStyles from '../../Styles/Themes/Elements';
import Fonts from '../../Styles/Themes/Fonts';

const Login = props => {
  const LoginInputs = [
    {
      name: 'username',
      placeholder: 'Enter your username',
      required: true,
    },
    {
      name: 'password',
      placeholder: 'Enter your password',
      required: true,
    },
  ];

  const handleAthentication = credentials => {
    const {authenticate} = props;
    authenticate(credentials);
  };

  return (
    <View style={Styles.content}>
      <View style={Styles.centeredVertical}>
        <Text style={Fonts.h2}>Sign In</Text>
        <Text style={ElementStyles.anchor}>Forgot your credentials?</Text>
        <AppForm
          inputs={LoginInputs}
          onSubmit={credentials => handleAthentication(credentials)}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: credentials => dispatch(requestAuthorization(credentials)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
