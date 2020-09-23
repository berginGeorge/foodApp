import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const CounterStyle = StyleSheet.create({
  mainWrapperView: {
    backgroundColor: ColorConstants.lightGreen,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueView: {fontSize: 20, color: ColorConstants.primaryColor},
});

export default CounterStyle;
