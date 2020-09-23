import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorConstants from '../util/constants/colorConstants';
import MainHeader from '../components/MainHeader/MainHeader';
import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen/RestaurantDetailScreen';

const Stack = createStackNavigator();
const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Restaurant"
      screenOptions={{
        headerTintColor: ColorConstants.white,
        headerTitleStyle: {
          color: ColorConstants.white,
        },
        headerStyle: {
          backgroundColor: ColorConstants.primaryColor,
        },
      }}>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          headerTitleAlign: 'left',
          headerRightContainerStyle: {
            justifyContent: 'flex-start',
          },
          headerTitleContainerStyle: {
            justifyContent: 'flex-end',
          },
          headerTitle: () => <MainHeader title="Restaurants" />,
          headerStyle: {
            backgroundColor: ColorConstants.primaryColor,
            height: 150,
          },
          headerTintColor: ColorConstants.white,
          headerRight: () => (
            <Icon.Button
              onPress={() => {}}
              name="search"
              backgroundColor="transparent"
              size={25}
              color={ColorConstants.white}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: '',
          // headerStyle: {
          //   backgroundColor: 'transparent',
          // },
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
};
export default RestaurantNavigator;
