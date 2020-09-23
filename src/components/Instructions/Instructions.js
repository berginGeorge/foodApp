import React, {memo} from 'react';
import {View, Text} from 'react-native';
import Card from '../Card/Card';
import InstructionsStyles from './Instructions.style';

const Instructions = ({instructions}) => {
  const renderList = (item, index) => {
    const serialNo = index + 1;
    return (
      <View
        key={`${index}`}
        style={InstructionsStyles.instructionItemView(
          !(serialNo === instructions.length),
        )}>
        <Text style={InstructionsStyles.instructionText}>{serialNo}.</Text>
        <Text
          style={[InstructionsStyles.instructionText, InstructionsStyles.pl10]}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <Card>
      <View style={InstructionsStyles.instructionParentView}>
        {instructions.map((instruction, index) =>
          renderList(instruction, index),
        )}
      </View>
    </Card>
  );
};

export default memo(Instructions);
