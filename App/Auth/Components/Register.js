import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {requestRegistation} from '../actions';

import AppForm from '../../Common/Components/AppForm';

import Styles from '../../Styles/Containers/ContainerStyles';
import Fonts from '../../Styles/Themes/Fonts';

const Register = props => {
  const RegisterInputs = [
    {
      name: 'username',
      placeholder: 'Enter a username',
      required: true,
    },
    {
      name: 'password',
      placeholder: 'Enter a password',
      required: true,
    },
    {
      name: 'passwordConfirmed',
      placeholder: 'Confirm password',
      required: true,
    },
  ];

  const handleRegistration = credentials => {
    const {register} = props;

    register(credentials);
  };

  return (
    <View style={Styles.content}>
      <View style={Styles.centeredVertical}>
        <Text style={Fonts.h2}>Sign Up</Text>
        <AppForm
          inputs={RegisterInputs}
          onSubmit={credentials => handleRegistration(credentials)}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    register: credentials => dispatch(requestRegistation(credentials)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
