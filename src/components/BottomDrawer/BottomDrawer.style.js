import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const BottomDrawerStyles = StyleSheet.create({
  backdropView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: ColorConstants.transparentBlack1,
  },
  drawerView: {
    backgroundColor: ColorConstants.white,
    paddingBottom: 35,
    borderRadius: 10,
    maxHeight: '70%',
  },
  drawerTitleView: {
    paddingVertical: 15,
    alignItems: 'center',
    position: 'relative',
    borderBottomColor: ColorConstants.lightGrey,
    borderBottomWidth: 1,
  },
  drawerTitle: {
    fontSize: 22,
    color: ColorConstants.primaryColor,
  },
  drawerIconView: {
    position: 'absolute',
    top: '50%',
    left: 16,
  },
});

export default BottomDrawerStyles;
