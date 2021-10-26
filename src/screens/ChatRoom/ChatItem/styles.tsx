/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';

export const ChatAvatar = styled(props => (
  <Avatar
    containerStyle={{
      alignSelf: props.isUser ? 'flex-start' : 'flex-end',
    }}
    rounded
    source={{
      uri: props.pic,
    }}
  />
))``;

export const SentContainer = styled(props => (
  <View
    style={{
      alignSelf: props.isUser ? 'flex-start' : 'flex-end',
      margin: 5,
    }}
  />
))``;
