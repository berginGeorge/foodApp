import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const InstructionsStyles = StyleSheet.create({
  instructionItemView: (showBorder) => ({
    paddingVertical: 15,
    borderBottomColor: ColorConstants.lightGrey,
    borderBottomWidth: showBorder ? 1 : 0,
    flexDirection: 'row',
  }),
  instructionParentView: {
    padding: 15,
    width: '100%',
  },
  instructionText: {
    fontSize: 17,
  },
  pl10: {
    paddingLeft: 10,
  },
});

export default InstructionsStyles;
