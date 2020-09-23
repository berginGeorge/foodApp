import React from 'react';
import {View, Text, Image} from 'react-native';
import Counter from '../Counter/Counter';
import DropDown from '../DropDown/DropDown';
import MakeReservationStyle from './MakeReservation.style';

const MakeReservation = () => {
  const {
    restaurantTileWrapper,
    restaurantTileLeftView,
    restaurantName,
    restaurantAddress,
    restaurantTileRightView,
    restaurantImagePreview,
    bookingView,
  } = MakeReservationStyle;
  return (
    <>
      <View style={restaurantTileWrapper}>
        <View style={restaurantTileLeftView}>
          <Text style={restaurantName}>Gusteau’s</Text>
          <Text style={restaurantAddress}>5 Avenue Anatole Paris, France</Text>
        </View>
        <View style={restaurantTileRightView}>
          <Image
            style={restaurantImagePreview}
            resizeMode="cover"
            source={{
              uri:
                'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
            }}
          />
        </View>
      </View>
      <View style={bookingView}>
        <DropDown />
        <Counter initialValue={0} maxValue={4} valueText="People" />
      </View>
    </>
  );
};

export default MakeReservation;
