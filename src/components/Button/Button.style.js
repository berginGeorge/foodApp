import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const ButtonStyle = StyleSheet.create({
  buttonView: {
    backgroundColor: ColorConstants.primaryColor,
    paddingVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: ColorConstants.white,
  },
});

export default ButtonStyle;
