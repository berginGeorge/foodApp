import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const TimeTileStyle = StyleSheet.create({
  wrapperView: (selected) => ({
    backgroundColor: selected
      ? ColorConstants.primaryColor
      : ColorConstants.lightGreen,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginRight: 10,
  }),
  timingText: (selected) => ({
    fontSize: 20,
    color: selected ? ColorConstants.white : ColorConstants.primaryColor,
  }),
});

export default TimeTileStyle;
