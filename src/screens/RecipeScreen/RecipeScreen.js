import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import recipeList from '../../dummyData/recipeList';
import Card from '../../components/Card/Card';
import RecipeScreenStyles from './RecipeScreen.style';

const RecipeScreen = ({navigation}) => {
  const {
    childrenCardView,
    recipeMainTitleContainer,
    recipeMainSubTitle,
    recipeMainTitle,
    stretch,
    mainContainerView,
  } = RecipeScreenStyles;

  const recipeOnPressHandler = (title) => {
    navigation.navigate('RecipeList', {
      title,
    });
  };

  const renderList = ({item}) => {
    return (
      <Card onPress={() => recipeOnPressHandler(item.title)}>
        <View style={childrenCardView}>
          <View style={recipeMainTitleContainer}>
            <Text style={recipeMainSubTitle}>{item.message.toUpperCase()}</Text>
            <Text style={recipeMainTitle}>{item.title}</Text>
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
  };

  return (
    <View style={mainContainerView}>
      <FlatList
        keyboardShouldPersistTaps="always"
        bounces="false"
        data={recipeList}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
        testID="recipeListFlastList"
      />
    </View>
  );
};

export default RecipeScreen;
