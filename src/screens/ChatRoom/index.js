import React from 'react';
import { View, Text } from 'react-native';

// Styles
import { MainContainer, BackgroundContainer, RoomContainer } from './styles';

const ChatRoom = ({ route }) => {
  const { roomId } = route.params;

  console.log('roomid => ', roomId);

  return (
    <BackgroundContainer>
      <MainContainer></MainContainer>
    </BackgroundContainer>
  );
};

export default ChatRoom;
