import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ButtonStyle from './Button.style';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle.buttonView}>
      <Text style={ButtonStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
