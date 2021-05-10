import React from 'react';
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Image } from 'react-native-elements';

import { Colors } from '../../../shared/constants/colors';

export const {
  PastalMutedBlue,
  PastalYallow,
  PastalRed,
  PastalBlue,
  PastalOrange,
} = Colors;

export const MainContainer = styled(props => <View {...props} />)`
  flex-direction: column;
  background-color: white;
`;

export const MsgContainer = styled(props => <View {...props} />)`
  flex-direction: row;
`;

export const ContentContainer = styled(props => <View {...props} />)`
  max-width: ${moderateScale(250, 2)}px;
  padding-horizontal: ${moderateScale(10, 2)}px;
  padding-top: ${moderateScale(5, 2)}px;
  padding-bottom: ${moderateScale(7, 2)}px;
  border-radius: 10px;
`;

export const ImageEmbedded = styled(props => (
  <Image
    {...props}
    style={{ height: 200, width: 250 }}
    PlaceholderContent={<ActivityIndicator />}
  />
))`
  flex: 1;
  border-radius: 10px;
`;

export const BubbleText = styled(props => <Text {...props} />)`
  padding-top: 3px;
  font-size: 17px;
  line-height: 22px;
`;

export const BubbleArrowContainer = styled(props => <View {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  flex: 1;
`;
