import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const RecipeDetailScreenStyle = StyleSheet.create({
  relativeView: {
    position: 'relative',
  },
  titleView: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    backgroundColor: ColorConstants.transparentBlack1,
  },
  titleText: {
    fontSize: 35,
    color: ColorConstants.white,
    fontWeight: '500',
    letterSpacing: 1,
  },
  paginationBoxStyle: {
    position: 'absolute',
    right: 0,
  },
  seeIngredientsView: {
    marginBottom: 10,
  },
  RecipeAndInstructionsView: {
    padding: 16,
  },
});

export default RecipeDetailScreenStyle;
