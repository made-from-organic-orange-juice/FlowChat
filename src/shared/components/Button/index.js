import React from 'react';
import { View } from 'react-native';
import { ButtonContainer, Label } from './styles';

const Button = ({
  onPress,
  label,
  color,
  textMargin,
  textColor,
  fontSize,
  flex,
  borderRadius,
  marginRight,
  marginLeft,
  ...props
}) => {
  return (
    <ButtonContainer
      onPress={() => onPress()}
      color={color}
      flex={flex}
      borderRadius={borderRadius}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...props}>
      <Label textMargin={textMargin} fontSize={fontSize} textColor={textColor}>
        {label}
      </Label>
    </ButtonContainer>
  );
};

export default Button;
