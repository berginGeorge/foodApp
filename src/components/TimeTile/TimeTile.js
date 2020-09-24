import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import TimeTileStyle from './TimeTile.style';

const TimeTile = ({selected, timing, onSelect}) => {
  console.log({selected});
  const {wrapperView, timingText} = TimeTileStyle;
  return (
    <TouchableWithoutFeedback onPress={() => onSelect()}>
      <View style={wrapperView(selected)}>
        <Text style={timingText(selected)}>{timing}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

TimeTile.propTypes = {
  selected: PropTypes.bool.isRequired,
  timing: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TimeTile;
