import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const CardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: ColorConstants.white,
    borderRadius: 5,
    shadowColor: ColorConstants.secondaryColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
    minHeight: 100,
    marginVertical: 10,
  },
});

export default CardStyles;
