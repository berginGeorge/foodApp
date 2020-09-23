import React from 'react';
import {View, Text, Image} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';
import RestaurantScreenStyle from './RestaurantScreen.style';

const RestaurantScreen = () => {
  return (
    <View style={{position:'relative'}}>
      <Image
        style={RestaurantScreenStyle.mapImage}
        resizeMode="cover"
        source={{
          uri:
            'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
        }}
      />
      <View
        style={{
          height: 200,
          backgroundColor: ColorConstants.primaryColor,
        }}></View>
    </View>
  );
};

export default RestaurantScreen;
