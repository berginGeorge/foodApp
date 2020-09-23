import {StyleSheet} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';

const RestaurantListItemStyle = StyleSheet.create({
  listItemWrapperView: {padding: 16, flexDirection: 'row', width: '100%'},
  listItemLeftHandView: {
    flexDirection: 'column',
    flex: 2,
    width: '100%',
    justifyContent: 'space-between',
  },
  listItemName: {fontSize: 22},
  listItemType: {fontSize: 15, color: ColorConstants.grey2},
  ratingAndReviewsView: {flexDirection: 'row', alignItems: 'center'},
  reviewsText: {color: ColorConstants.grey2, paddingLeft: 10},
  listItemRightHandView: {alignItems: 'flex-end', flex: 1, width: '100%'},
  restaurantImage: {
    width: 100,
    height: 80,
    borderRadius: 7,
  },
});

export default RestaurantListItemStyle;
