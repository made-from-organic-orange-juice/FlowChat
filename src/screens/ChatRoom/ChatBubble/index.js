import React, { useState, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { format, formatDistance } from 'date-fns';

import BasicText from '../../../shared/components/BasicText';
import { MainBubble, Cloud, Message, SvgArrow, ArrowContainer } from './styles';

const ChatBubble = ({ mine, message, sendBy, image, time }) => {
  const [sentAt, setSentAt] = useState(null);

  useEffect(() => {
    setSentAt(formatDistance(new Date(), time ? time.toDate() : new Date()));
  }, []);

  return (
    <View style={{ flexDirection: 'column' }}>
      <View
        style={[
          {
            flexDirection: 'row',
            marginVertical: moderateScale(7, 2),
          },
          mine
            ? {
                marginLeft: 20,
              }
            : {
                alignSelf: 'flex-end',
                marginRight: 20,
              },
        ]}>
        <View
          style={[
            {
              maxWidth: moderateScale(250, 2),
              paddingHorizontal: moderateScale(10, 2),
              paddingTop: moderateScale(5, 2),
              paddingBottom: moderateScale(7, 2),
              borderRadius: 20,
            },
            { backgroundColor: mine ? '#dddddd' : '#007aff' },
          ]}>
          {image ? (
            <Image
              style={{ alignSelf: mine ? 'flex-start' : 'flex-end' }}
              borderRadius={10}
              source={image}
            />
          ) : null}

          {message ? (
            <Text
              style={[
                { paddingTop: 3, fontSize: 17, lineHeight: 22 },
                {
                  color: mine ? 'black' : 'white',
                },
              ]}>
              {message}
            </Text>
          ) : null}

          <View
            style={[
              {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                flex: 1,
              },
              mine
                ? { justifyContent: 'flex-end', alignItems: 'flex-start' }
                : { justifyContent: 'flex-end', alignItems: 'flex-end' },
            ]}>
            <Svg
              style={
                mine
                  ? { left: moderateScale(-6, 0.5) }
                  : { right: moderateScale(-6, 0.5) }
              }
              width={moderateScale(15.5, 0.6)}
              height={moderateScale(17.5, 0.6)}
              viewBox="32.484 17.5 15.515 17.5"
              enable-background="new 32.485 17.5 15.515 17.5">
              <Path
                d={
                  mine
                    ? 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'
                    : 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
                }
                fill={mine ? '#dddddd' : '#007AFF'}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={{ alignSelf: mine ? 'flex-start' : 'flex-end', margin: 5 }}>
        <BasicText fontSize={10}>
          {sendBy} sent {sentAt} ago.
        </BasicText>
      </View>
    </View>
  );
};

export default ChatBubble;
