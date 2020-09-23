import React, {useRef} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorConstants from '../../util/constants/colorConstants';
import StarRatingStyle from './StarRating.style';

const StarRating = ({rating, size = 20}) => {
  const {primaryColor, lightGreen} = ColorConstants;
  return (
    <View style={StarRatingStyle.wrapperView}>
      <Icon
        name="star"
        color={rating >= 1 ? primaryColor : lightGreen}
        size={size}
      />
      <Icon
        name="star"
        color={rating >= 2 ? primaryColor : lightGreen}
        size={size}
      />
      <Icon
        name="star"
        color={rating >= 3 ? primaryColor : lightGreen}
        size={size}
      />
      <Icon
        name="star"
        color={rating >= 4 ? primaryColor : lightGreen}
        size={size}
      />
      <Icon
        name="star"
        color={rating >= 5 ? primaryColor : lightGreen}
        size={size}
      />
    </View>
  );
};

export default StarRating;
