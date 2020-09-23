import ColorConstants from '../../util/constants/colorConstants';
import {StyleSheet, Dimensions} from 'react-native';

const RecipeScreenStyles = StyleSheet.create({
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
  recipeMainTitleContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 99,
    backgroundColor: ColorConstants.transparentBlack1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  recipeMainTitle: {
    color: ColorConstants.white,
    fontSize: 28,
    paddingTop: 7,
  },
  recipeMainSubTitle: {
    color: ColorConstants.white,
    fontSize: 15,
  },
});

export default RecipeScreenStyles;
