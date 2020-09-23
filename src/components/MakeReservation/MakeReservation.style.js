import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const MakeReservationStyle = StyleSheet.create({
  restaurantTileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: ColorConstants.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  restaurantTileLeftView: {flexDirection: 'column', flex: 2, width: '100%'},
  restaurantName: {fontSize: 25, paddingBottom: 3},
  restaurantAddress: {fontSize: 17, color: ColorConstants.grey2},
  restaurantTileRightView: {flex: 1, width: '100%', alignItems: 'flex-end'},
  restaurantImagePreview: {
    width: 100,
    height: 80,
    borderRadius: 7,
  },
  bookingView: {
      marginTop: 16,
  }
});

export default MakeReservationStyle;
