import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {timing} from 'react-native-reanimated';
import restaurantDetail from '../../dummyData/restaurantDetail';

import Counter from '../Counter/Counter';
import DropDown from '../DropDown/DropDown';
import TimeTile from '../TimeTile/TimeTile';
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

  const [reservationTimings, setReservationTimings] = useState(
    restaurantDetail.reservationTiming,
  );

  const timeSelectHandler = (index) => {
    const tempTiming = reservationTimings.map((timingObj) => ({
      ...timingObj,
      selected: false,
    }));
    tempTiming[index].selected = !tempTiming[index].selected;
    setReservationTimings(tempTiming);
  };

  useEffect(() => {
    console.log('reservationTimings', reservationTimings);
  }, [reservationTimings]);

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {reservationTimings.map(({timing, selected}, index) => (
            <TimeTile
              key={timing}
              timing={timing}
              selected={selected}
              onSelect={() => {
                timeSelectHandler(index);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default MakeReservation;
