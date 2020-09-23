import React, {useState} from 'react';
import {FlatList, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorConstants from '../../util/constants/colorConstants';
import IngredientsStyles from './Ingredients.style';

const Ingredients = ({ingredients}) => {
  const [allIngredients, setAllIngredients] = useState(ingredients);

  const ingredientSelectHandler = (index) => {
    const ingreds = [...allIngredients];
    ingreds[index].selected = !ingreds[index].selected;
    setAllIngredients(ingreds);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => ingredientSelectHandler(index)}>
        <View style={IngredientsStyles.ingredientItemMainView}>
          <View style={IngredientsStyles.ingredientIconView}>
            <Icon
              name={item.selected ? 'radio-button-on' : 'radio-button-off'}
              color={ColorConstants.primaryColor}
              size={30}
            />
          </View>
          <View style={IngredientsStyles.ingredientTextView}>
            <Text style={IngredientsStyles.ingredientTitle}>
              {item.ingredientName}
            </Text>
            <Text style={IngredientsStyles.ingredientMeasureText}>
              {item.measure}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <FlatList
      data={allIngredients}
      keyExtractor={(_, index) => `${index}`}
      renderItem={renderItem}
    />
  );
};

export default Ingredients;
