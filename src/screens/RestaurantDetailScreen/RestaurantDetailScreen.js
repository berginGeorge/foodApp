import React, {useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import BottomDrawer from '../../components/BottomDrawer/BottomDrawer';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import MakeReservation from '../../components/MakeReservation/MakeReservation';
import PeopleAndTime from '../../components/PeopleAndTime/PeopleAndTime';
import restaurantDetail from '../../dummyData/restaurantDetail';
import ColorConstants from '../../util/constants/colorConstants';
import RecipeDetailScreenStyle from '../RecipeDetailScreen/RecipeDetailScreen.style';
import RestaurantScreenStyle from '../RestaurantScreen/RestaurantScreen.style';
import RestaurantDetailScreenStyle from './RestaurantDetailScreen.style';

const RestaurantDetailScreen = ({route: {params}}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ScrollView bounces={false}>
      <View>
        <View style={RecipeDetailScreenStyle.relativeView}>
          <SliderBox
            images={restaurantDetail.restaurantImages}
            sliderBoxHeight={200}
            dotColor={ColorConstants.primaryColor}
            inactiveDotColor={ColorConstants.white}
            paginationBoxStyle={RecipeDetailScreenStyle.paginationBoxStyle}
          />
          <View style={RecipeDetailScreenStyle.titleView}>
            <Text style={RecipeDetailScreenStyle.titleText}>{params.name}</Text>
          </View>
        </View>
        <PeopleAndTime price rating={4} reviews={129} time="18:00 - 22:00" />
        <Image
          style={RestaurantScreenStyle.mapImage}
          resizeMode="cover"
          source={{
            uri:
              'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
          }}
        />
        <View style={RestaurantDetailScreenStyle.wrapperView}>
          <View style={RecipeDetailScreenStyle.seeIngredientsView}>
            <Button
              title="Make Reservation"
              onPress={() => {
                setShowModal(true);
              }}
            />
          </View>
          <Card>
            <View style={RestaurantDetailScreenStyle.informationView}>
              <Text style={RestaurantDetailScreenStyle.informationText}>
                The restaurant was degraded to a 4-star rating after feared food
                critic Anton Ego (possibly deliberately) wrote a scathing review
                regarding Gusteau’s cooking.
              </Text>
            </View>
          </Card>
        </View>
      </View>
      <BottomDrawer
        visible={showModal}
        onClose={() => setShowModal(false)}
        title="Make Reservation">
        <View style={RestaurantDetailScreenStyle.drawerChildView}>
          <MakeReservation />
        </View>
      </BottomDrawer>
    </ScrollView>
  );
};

export default RestaurantDetailScreen;
