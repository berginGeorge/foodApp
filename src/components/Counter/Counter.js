import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ColorConstants from '../../util/constants/colorConstants';
import Icon from 'react-native-vector-icons/Ionicons';
import CounterStyle from './Counter.style';

const Counter = ({initialValue = 0, maxValue = 4, valueText = ''}) => {
  const {mainWrapperView, valueView} = CounterStyle;
  const [count, setCount] = useState(initialValue);
  return (
    <View style={mainWrapperView}>
      <View>
        <Icon.Button
          disabled={count === maxValue}
          onPress={() => setCount(count + 1)}
          name="add"
          backgroundColor="transparent"
          size={25}
          color={ColorConstants.primaryColor}
        />
      </View>
      <View>
        <Text style={valueView}>
          {count} {valueText}
        </Text>
      </View>
      <View>
        <Icon.Button
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
          name="remove"
          backgroundColor="transparent"
          size={25}
          color={ColorConstants.primaryColor}
        />
      </View>
    </View>
  );
};

export default Counter;
