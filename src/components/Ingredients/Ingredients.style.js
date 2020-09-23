import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const IngredientsStyles = StyleSheet.create({
  ingredientItemMainView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: ColorConstants.lightGrey,
    borderBottomWidth: 1,
  },
  ingredientIconView: {flex: 1, alignItems: 'center'},
  ingredientTextView: {
    flex: 6,
    flexDirection: 'column',
  },
  ingredientTitle: {marginBottom: 10, fontSize: 21},
  ingredientMeasureText: {fontSize: 15},
});

export default IngredientsStyles;
