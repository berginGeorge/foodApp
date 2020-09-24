import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import RecipeListingScreenStyle from './RecipeListingScreen.style';
import breakfastList from '../../dummyData/breakfastList';
import Card from '../../components/Card/Card';

const RecipeListingScreen = ({navigation}) => {
  const {
    childrenCardView,
    listingMainTitleContainer,
    breakfastListingMainTitle,
    breakfastlistingPeopleTimeContainer,
    breakfastlistingPeopleTime,
    stretch,
    mainContainerView,
  } = RecipeListingScreenStyle;
  const breakfastItemOnPressHandler = (title) => {
    navigation.navigate('RecipeDetail', {
      title,
    });
  };

  const renderList = ({item}) => (
    <Card onPress={() => breakfastItemOnPressHandler(item.title)}>
      <View style={childrenCardView}>
        <View style={listingMainTitleContainer}>
          <Text style={breakfastListingMainTitle}>{item.title}</Text>
        </View>
        <View style={breakfastlistingPeopleTimeContainer}>
          <Text style={breakfastlistingPeopleTime}>
            {`${item.noOfPeople} people - ${item.time} minutes`}
          </Text>
        </View>
        <Image
          style={stretch}
          resizeMode="cover"
          source={{
            uri: item.imageURL,
          }}
        />
      </View>
    </Card>
  );

  return (
    <View style={mainContainerView}>
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
