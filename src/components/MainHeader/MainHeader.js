import React from 'react';
import {View, Text} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const MainHeader = ({title}) => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={{color: ColorConstants.white, fontSize: 34, width: '100%'}}>
        {title}
      </Text>
    </View>
  );
};

export default MainHeader;
