import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import breakfastDetails from '../../dummyData/breakfastDetails';
import ColorConstants from '../../util/constants/colorConstants';
import RecipeDetailScreenStyle from './RecipeDetailScreen.style';
import PeopleAndTime from '../../components/PeopleAndTime/PeopleAndTime';
import Button from '../../components/Button/Button';

const RecipeDetailScreen = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    setSliderImages(breakfastDetails.images);
  }, []);

  return (
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
          <Text style={RecipeDetailScreenStyle.titleText}>Belgian Waffle</Text>
        </View>
      </View>
      <PeopleAndTime people={2} time={45} />
      <View style={RecipeDetailScreenStyle.RecipeAndInstructionsView}>
        <View style={RecipeDetailScreenStyle.seeIngredientsView}>
          <Button title="See Ingredients" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;
