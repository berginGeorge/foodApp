import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import CardStyle from './Card.style';

const Card = ({children, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={CardStyle.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
