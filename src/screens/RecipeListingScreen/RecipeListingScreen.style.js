import ColorConstants from '../../util/constants/colorConstants';
import {StyleSheet, Dimensions} from 'react-native';

const RecipeListingScreenStyle = StyleSheet.create({
  mainContainerView: {
    padding: 16,
  },
  childrenCardView: {
    height: 250,
    position: 'relative',
  },
  stretch: {
    width: Dimensions.get('window').width - 32,
    height: '100%',
    borderRadius: 5,
  },
  listingMainTitleContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 99,
    backgroundColor: ColorConstants.transparentBlack1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  breakfastlistingPeopleTimeContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    zIndex: 99,
    backgroundColor: ColorConstants.transparentBlack1,
    padding: 5,
  },
  breakfastListingMainTitle: {
    color: ColorConstants.white,
    fontSize: 28,
  },
  breakfastlistingPeopleTime: {
    color: ColorConstants.white,
    fontSize: 16,
  },
});

export default RecipeListingScreenStyle;
