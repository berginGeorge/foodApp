import ColorConstants from '../../util/constants/colorConstants';
import {StyleSheet} from 'react-native';

const PeopleAndTimeStyle = StyleSheet.create({
  peopleAndMinuteParentView: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: ColorConstants.white,
    shadowColor: ColorConstants.secondaryColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  peopleAndMinuteIndividualTile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  peopleAndMinuteText: {
    color: ColorConstants.primaryColor,
    paddingTop: 7,
  },
  ratingText: {
    color: ColorConstants.primaryColor,
    paddingTop: 10,
  },
});

export default PeopleAndTimeStyle;
