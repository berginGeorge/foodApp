import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const DropDownStyle = StyleSheet.create({
  mainWrapperView: {
    backgroundColor: ColorConstants.lightGreen,
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 7,
    marginBottom: 16,
    width: '100%',
  },
  selectedValue: {fontSize: 20, color: ColorConstants.primaryColor},
  dropDownArrowView: {position: 'absolute', right: 16, top: '50%'}
});

export default DropDownStyle;
