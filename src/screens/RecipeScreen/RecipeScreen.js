import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import recipeList from '../../dummyData/recipeList';
import Card from '../../components/Card/Card';
import RecipeScreenStyles from './RecipeScreen.style';

const RecipeScreen = ({navigation}) => {
  const recipeOnPressHandler = (title) => {
    navigation.navigate('RecipeList', {
      title,
    });
  };

  const renderList = ({item}) => {
    console.log(item);
    return (
      <Card onPress={() => recipeOnPressHandler(item.title)}>
        <View style={RecipeScreenStyles.childrenCardView}>
          <View style={RecipeScreenStyles.recipeMainTitleContainer}>
            <Text style={RecipeScreenStyles.recipeMainSubTitle}>
              {item.message.toUpperCase()}
            </Text>
            <Text style={RecipeScreenStyles.recipeMainTitle}>{item.title}</Text>
          </View>
          <Image
            style={RecipeScreenStyles.stretch}
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
    <View style={RecipeScreenStyles.mainContainerView}>
      <FlatList
        keyboardShouldPersistTaps="always"
        bounces="false"
        data={recipeList}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
      />
    </View>
  );
};

export default RecipeScreen;
