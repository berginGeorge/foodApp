import React from 'react';
import {View, Text} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';
import DropDownStyle from './DropDown.style';
import Icon from 'react-native-vector-icons/Ionicons';

const DropDown = () => {
  const {mainWrapperView, selectedValue, dropDownArrowView} = DropDownStyle;
  return (
    <View style={mainWrapperView}>
      <Text style={selectedValue}>Today</Text>
      <View style={dropDownArrowView}>
        <Icon
          name="chevron-down"
          size={30}
          color={ColorConstants.primaryColor}
        />
      </View>
    </View>
  );
};

export default DropDown;
