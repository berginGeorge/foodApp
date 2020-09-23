import React from 'react';
import {View, Text} from 'react-native';
import PeopleAndTimeStyle from './PeopleAndTime.style';
import ColorConstants from '../../util/constants/colorConstants';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from '../StarRating/StarRating';

const PeopleAndTime = ({people, time, price, rating, reviews}) => {
  return (
    <View style={PeopleAndTimeStyle.peopleAndMinuteParentView}>
      {people && (
        <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
          <Icon
            name="restaurant"
            color={ColorConstants.primaryColor}
            size={27}
          />
          <Text style={PeopleAndTimeStyle.peopleAndMinuteText}>
            {people} people
          </Text>
        </View>
      )}
      {price && (
        <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
          <Icon name="cash" color={ColorConstants.primaryColor} size={27} />
          <Text style={PeopleAndTimeStyle.peopleAndMinuteText}>$$</Text>
        </View>
      )}
      {rating && (
        <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
          <StarRating rating={rating} size={23} />
          <Text style={PeopleAndTimeStyle.ratingText}>{reviews} reviews</Text>
        </View>
      )}
      {time && (
        <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
          <Icon name="time" color={ColorConstants.primaryColor} size={27} />
          <Text style={PeopleAndTimeStyle.peopleAndMinuteText}>{time}</Text>
        </View>
      )}
    </View>
  );
};

export default PeopleAndTime;
