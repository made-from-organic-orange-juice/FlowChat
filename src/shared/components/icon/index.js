import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicText from '../BasicText';
import { IconContainer } from './styles';

const IconWithText = ({
  name,
  iconColor,
  iconSize = 17,
  textColor,
  fontSize = '13',
  text,
}) => {
  return (
    <IconContainer>
      <Icon
        style={{ alignSelf: 'center' }}
        name={name}
        size={iconSize}
        color="white"
      />
      <BasicText fontSize={fontSize + 'px'}>{text}</BasicText>
    </IconContainer>
  );
};

export default IconWithText;
