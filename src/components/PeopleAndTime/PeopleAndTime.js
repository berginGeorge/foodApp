import React from 'react';
import {View, Text} from 'react-native';
import PeopleAndTimeStyle from './PeopleAndTime.style';
import ColorConstants from '../../util/constants/colorConstants';
import Icon from 'react-native-vector-icons/Ionicons';

const PeopleAndTime = ({people, time}) => {
  return (
    <View style={PeopleAndTimeStyle.peopleAndMinuteParentView}>
      <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
        <Icon name="restaurant" color={ColorConstants.primaryColor} size={27} />
        <Text style={PeopleAndTimeStyle.peopleAndMinuteText}>
          {people} people
        </Text>
      </View>
      <View style={PeopleAndTimeStyle.peopleAndMinuteIndividualTile}>
        <Icon name="time" color={ColorConstants.primaryColor} size={27} />
        <Text style={PeopleAndTimeStyle.peopleAndMinuteText}>
          {time} minutes
        </Text>
      </View>
    </View>
  );
};

export default PeopleAndTime;
