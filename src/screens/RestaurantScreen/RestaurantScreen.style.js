import {Dimensions, StyleSheet} from 'react-native';

const RestaurantScreenStyle = StyleSheet.create({
  mapImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  screenParentView: {flex: 1},
  restaurantFlatListView: {
    padding: 16,
    flex: 1,
  },
});

export default RestaurantScreenStyle;
