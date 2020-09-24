import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ButtonStyle from './Button.style';
import PropTypes from 'prop-types';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle.buttonView}>
      <Text style={ButtonStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
