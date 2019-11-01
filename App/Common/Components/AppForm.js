import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AppInput from './AppInput';
import AppButton from './AppButton';

import Fonts from '../../Styles/Themes/Fonts';

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredError: false,
      fields: {},
    };
  }

  handleInputChange = (name, value) => {
    const {fields} = this.state;
    this.setState({
      ...this.state,
      fields: {
        ...fields,
        [name]: value,
      },
    });

    console.log(this.state);
  };

  requiredSatisfied = () => {
    const {inputs} = this.props;
    const {fields} = this.state;

    inputs.forEach(input => {
      const {name, required} = input;

      if (required) {
        if (!fields[name] || fields[name].trim() === '') {
          return false;
        }
      }
    });

    return true;
  };

  handleFormSubmit = () => {
    this.setState({
      inputsInvalid: false,
    });

    const {onSubmit} = this.props;
    const {fields} = this.state;

    if (this.requiredSatisfied()) {
      onSubmit(fields);
    } else {
      this.setState({
        inputsInvalid: true,
      });
    }
  };

  render() {
    const {inputs} = this.props;
    const {requiredError} = this.props;

    return (
      <View>
        {requiredError && (
          <Text style={Fonts.error}>Please fill out all required fields</Text>
        )}
        {inputs.map(input => {
          const {placeholder, name} = input;

          return (
            <AppInput
              key={name}
              placeholder={placeholder}
              name={name}
              onChange={this.handleInputChange}
            />
          );
        })}
        <AppButton
          childText="Submit"
          onPress={this.handleFormSubmit}
          buttonStyles={{marginTop: 15}}
        />
      </View>
    );
  }
}

export default AppForm;
