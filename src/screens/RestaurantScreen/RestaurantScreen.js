import React from 'react';
import {View, Image, FlatList} from 'react-native';
import restaurantsList from '../../dummyData/restaurantsList';
import RestaurantScreenStyle from './RestaurantScreen.style';
import RestaurantListItem from '../../components/RestaurantListItem/RestaurantListItem';

const RestaurantScreen = ({navigation}) => {
  const restaurantOnPressHandler = (name) => {
    navigation.navigate('RestaurantDetail', {
      name,
    });
  };
  const renderItem = ({item}) => {
    return (
      <RestaurantListItem
        item={item}
        onPress={() => restaurantOnPressHandler(item.name)}
      />
    );
  };

  return (
    <View style={RestaurantScreenStyle.screenParentView}>
      <Image
        style={RestaurantScreenStyle.mapImage}
        resizeMode="cover"
        source={{
          uri:
            'https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg',
        }}
      />
      <View style={RestaurantScreenStyle.restaurantFlatListView}>
        <FlatList
          data={restaurantsList}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default RestaurantScreen;
