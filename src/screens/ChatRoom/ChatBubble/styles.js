import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';

export const ArrowContainer = styled(props => (
  <View
    style={
      props.mine
        ? { justifyContent: 'flex-end', alignItems: 'flex-start' }
        : { justifyContent: 'flex-end', alignItems: 'flex-end' }
    }
  />
))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  flex: 1;
`;

export const MainBubble = styled(props => (
  <View
    style={[
      {
        flexDirection: 'row',
        marginVertical: moderateScale(7, 2),
      },
      props.min
        ? {
            marginLeft: 20,
          }
        : {
            alignSelf: 'flex-end',
            marginRight: 20,
          },
    ]}
  />
))``;

export const Cloud = styled(props => (
  <View style={{ backgroundColor: props.mine ? '#dddddd' : '#007aff' }} />
))`
  max-width: ${moderateScale(250, 2)};
  padding-horizontal: ${moderateScale(10, 2)};
  padding-top: ${moderateScale(5, 2)};
  padding-bottom: ${moderateScale(7, 2)};
  border-radius: 20px;
`;

export const Message = styled(props => (
  <Text style={{ color: props.mine ? 'black' : 'white' }} />
))`
  padding-top: 3px;
  font-size: 17px;
  line-height: 22px;
`;

export const SvgArrow = styled(props => (
  <Svg
    style={
      props.mine
        ? { left: moderateScale(-6, 0.5) }
        : { right: moderateScale(-6, 0.5) }
    }
    width={moderateScale(15.5, 0.6)}
    height={moderateScale(17.5, 0.6)}
    viewBox="32.484 17.5 15.515 17.5"
    enable-background="new 32.485 17.5 15.515
    17.5">
    <Path
      d={
        props.mine
          ? 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'
          : 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
      }
      fill={props.mine ? '#dddddd' : '#007AFF'}
      x="0"
      y="0"
    />
  </Svg>
))``;
