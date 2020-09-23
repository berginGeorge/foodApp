import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from '../Card/Card';
import StarRating from '../StarRating/StarRating';
import RestaurantListItemStyle from './RestaurantListItem.style';

const RestaurantListItem = ({item, onPress}) => {
  return (
    <Card onPress={onPress}>
      <View style={RestaurantListItemStyle.listItemWrapperView}>
        <View style={RestaurantListItemStyle.listItemLeftHandView}>
          <View>
            <Text style={RestaurantListItemStyle.listItemName}>
              {item.name}
            </Text>
            <Text style={RestaurantListItemStyle.listItemType}>
              {item.type}
            </Text>
          </View>
          <View style={RestaurantListItemStyle.ratingAndReviewsView}>
            <StarRating rating={item.rating} />
            <Text style={RestaurantListItemStyle.reviewsText}>
              {item.reviewCount} reviews
            </Text>
          </View>
        </View>
        <View style={RestaurantListItemStyle.listItemRightHandView}>
          <Image
            style={RestaurantListItemStyle.restaurantImage}
            resizeMode="cover"
            source={{
              uri: item.imageURL,
            }}
          />
        </View>
      </View>
    </Card>
  );
};

export default RestaurantListItem;
