/* eslint-disable react-native/no-inline-styles */

// Libraries
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

// Includes
import BasicText from '../../../shared/components/BasicText';

// Styles
import {
  MainContainer,
  MsgContainer,
  ContentContainer,
  PastalBlue,
  PastalRed,
  ImageEmbedded,
  BubbleArrowContainer,
  BubbleText,
} from './styles';

/********************************************************************************
 *  ChatBubble Component that is used for the chatroom
 * ******************************************************************************/

const ChatBubble = ({ mine, message, image }) => {
  return (
    <MainContainer>
      {/**
       *   'mine' will decide where we show the msg box, either to the right or left.
       *
       */}
      <MsgContainer
        style={
          mine
            ? {
                marginLeft: 40,
              }
            : {
                alignSelf: 'flex-end',
                marginRight: 40,
              }
        }>
        {/**
         *
         * depending on 'mine', show different chat buble colors
         */}
        <ContentContainer
          style={{ backgroundColor: mine ? PastalBlue : PastalRed }}>
          {/**
           * if we have an image attached to the msg, show it!
           *
           */}
          {image ? (
            <ImageEmbedded
              style={{ alignSelf: mine ? 'flex-start' : 'flex-end' }}
              source={image}
            />
          ) : null}
          {/**
           * if we have a msg attached it, and color it depending on who wrote it
           *
           */}
          {message ? (
            <BubbleText
              style={{
                color: mine ? 'white' : 'white',
              }}>
              {message}
            </BubbleText>
          ) : null}

          <BubbleArrowContainer
            style={
              mine
                ? { justifyContent: 'flex-end', alignItems: 'flex-start' }
                : { justifyContent: 'flex-end', alignItems: 'flex-end' }
            }>
            {/**
             * Makes the arrow at the bottom of the bubble
             *
             */}
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
                fill={mine ? PastalBlue : PastalRed}
                x="0"
                y="0"
              />
            </Svg>
          </BubbleArrowContainer>
        </ContentContainer>
      </MsgContainer>
    </MainContainer>
  );
};

export default ChatBubble;
