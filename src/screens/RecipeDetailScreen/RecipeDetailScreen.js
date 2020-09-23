import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import breakfastDetails from '../../dummyData/breakfastDetails';
import ColorConstants from '../../util/constants/colorConstants';
import RecipeDetailScreenStyle from './RecipeDetailScreen.style';
import PeopleAndTime from '../../components/PeopleAndTime/PeopleAndTime';
import Button from '../../components/Button/Button';
import Instructions from '../../components/Instructions/Instructions';
import BottomDrawer from '../../components/BottomDrawer/BottomDrawer';
import Ingredients from '../../components/Ingredients/Ingredients';

const RecipeDetailScreen = ({route: {params}}) => {
  const [sliderImages, setSliderImages] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSliderImages(breakfastDetails.images);
    setInstructions(breakfastDetails.instructions);
    setIngredients(breakfastDetails.ingredients);
  }, []);

  return (
    <ScrollView bounces={false}>
      <View>
        <View style={RecipeDetailScreenStyle.relativeView}>
          <SliderBox
            images={sliderImages}
            sliderBoxHeight={200}
            dotColor={ColorConstants.primaryColor}
            inactiveDotColor={ColorConstants.white}
            paginationBoxStyle={RecipeDetailScreenStyle.paginationBoxStyle}
          />
          <View style={RecipeDetailScreenStyle.titleView}>
            <Text style={RecipeDetailScreenStyle.titleText}>
              {params.title}
            </Text>
          </View>
        </View>
        <PeopleAndTime people={2} time="45 minutes" />
        <View style={RecipeDetailScreenStyle.recipeAndInstructionsView}>
          <View style={RecipeDetailScreenStyle.seeIngredientsView}>
            <Button
              title="See Ingredients"
              onPress={() => {
                setShowModal(true);
              }}
            />
          </View>
          <Instructions instructions={instructions} />
        </View>
      </View>
      <BottomDrawer
        visible={showModal}
        onClose={() => setShowModal(false)}
        title="Ingredients">
        <View style={RecipeDetailScreenStyle.drawerChildView}>
          <Ingredients ingredients={ingredients} />
          <View style={RecipeDetailScreenStyle.reminderButtonView}>
            <Button title="Add to Reminders" onPress={() => {}} />
          </View>
        </View>
      </BottomDrawer>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
