import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecipeListingScreen from '../screens/RecipeListingScreen/RecipeListingScreen';
import RecipeScreen from '../screens/RecipeScreen/RecipeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen/RecipeDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorConstants from '../util/constants/colorConstants';
import MainHeader from '../components/MainHeader/MainHeader';

const Stack = createStackNavigator();
const RecipesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Recipes"
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
        name="Recipes"
        component={RecipeScreen}
        options={{
          headerTitleAlign: 'left',
          headerRightContainerStyle: {
            justifyContent: 'flex-start',
          },
          headerTitleContainerStyle: {
            justifyContent: 'flex-end',
          },
          headerTitle: () => <MainHeader title="Recipes" />,
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
        name="RecipeList"
        component={RecipeListingScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTitleStyle: {
            fontSize: 18,
          },
        })}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
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
export default RecipesNavigator;
