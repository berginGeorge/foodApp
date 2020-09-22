import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RestaurantNavigator from './RestaurantNavigator';
import RecipesNavigator from './RecipesNavigator';
import ColorConstants from '../util/constants/colorConstants';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: ColorConstants.primaryColor,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, size}) => {
      let iconName;

      if (route.name === 'RecipeStack') {
        iconName = focused ? 'reader' : 'reader-outline';
      } else if (route.name === 'RestaurantStack') {
        iconName = focused ? 'restaurant' : 'restaurant-outline';
      }

      // You can return any component that you like here!
      return (
        <Ionicons
          name={iconName}
          size={size}
          color={
            focused
              ? ColorConstants.primaryColor
              : ColorConstants.secondaryColor
          }
        />
      );
    },
  });

  const tabBarOptions = {
    showLabel: false,
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
        initialRouteName="RecipeStack">
        <Tab.Screen name="RecipeStack" component={RecipesNavigator} />
        <Tab.Screen name="RestaurantStack" component={RestaurantNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
