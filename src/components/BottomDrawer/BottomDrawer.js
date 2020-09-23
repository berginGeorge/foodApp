import React from 'react';
import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import BottomDrawerStyles from './BottomDrawer.style';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorConstants from '../../util/constants/colorConstants';

const BottomDrawer = ({children, visible, onClose, title}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={BottomDrawerStyles.backdropView}>
        <View style={BottomDrawerStyles.drawerView}>
          <View>
            <TouchableWithoutFeedback onPress={() => onClose()}>
              <View style={BottomDrawerStyles.drawerTitleView}>
                <View style={BottomDrawerStyles.drawerIconView}>
                  <Icon
                    name="chevron-down"
                    size={35}
                    color={ColorConstants.primaryColor}
                  />
                </View>
                <Text style={BottomDrawerStyles.drawerTitle}>{title}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomDrawer;
