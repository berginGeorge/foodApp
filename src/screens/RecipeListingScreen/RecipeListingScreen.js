import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import RecipeListingScreenStyle from './RecipeListingScreen.style';
import breakfastList from '../../dummyData/breakfastList';
import Card from '../../components/Card/Card';

const RecipeListingScreen = ({navigation}) => {
  const breakfastItemOnPressHandler = (title) => {
    navigation.navigate('RecipeDetail', {
      title,
    });
  };

  const renderList = ({item}) => {
    console.log(item);
    return (
      <Card onPress={() => breakfastItemOnPressHandler(item.title)}>
        <View style={RecipeListingScreenStyle.childrenCardView}>
          <View style={RecipeListingScreenStyle.listingMainTitleContainer}>
            <Text style={RecipeListingScreenStyle.breakfastListingMainTitle}>
              {item.title}
            </Text>
          </View>
          <View
            style={
              RecipeListingScreenStyle.breakfastlistingPeopleTimeContainer
            }>
            <Text style={RecipeListingScreenStyle.breakfastlistingPeopleTime}>
              {`${item.noOfPeople} people - ${item.time} minutes`}
            </Text>
          </View>
          <Image
            style={RecipeListingScreenStyle.stretch}
            resizeMode="cover"
            source={{
              uri: item.imageURL,
            }}
          />
        </View>
      </Card>
    );
  };

  return (
    <View style={RecipeListingScreenStyle.mainContainerView}>
      <FlatList
        keyboardShouldPersistTaps="always"
        bounces="false"
        data={breakfastList}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeListingScreen;
