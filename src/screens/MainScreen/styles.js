import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import { Colors } from '../../shared/constants/colors';
import { Button, Avatar, Divider } from 'react-native-elements';

export const {
  white,
  LogoBackground,
  blackBackgroundColor2,
  blackBackgroundColor1,
  grayTextColor,
  lightRedButton,
  PinkBalloon,
  lightBlueSwipeView,
} = Colors;

export const ProfileDivider = styled(props => (
  <Divider style={{ backgroundColor: PinkBalloon, marginHorizontal: 40 }} />
))``;

export const AvatarContainer = styled.View`
  flex: 1;
  align-self: center;
  width: 200px;
  flex-direction: column;
`;

export const ProfileImageContainer = styled.View`
  flex: 0.3;
  justify-content: center;
`;

export const UserAvatar = styled(props => (
  <Avatar rounded size={'large'} {...props} />
))`
  flex: 1;
  margin: 10px;
`;

export const RoomContainer = styled.View`
  flex: 1;
  margin: 20px;
  border-radius: 10px;
  background-color: ${LogoBackground};
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PinkBalloon};
`;

export const SignoutContainer = styled.View`
  flex: 0.5;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainContainer = styled.View`
  flex: 1;
  border-radius: 60px;
  background-color: ${LogoBackground};
  margin-horizontal: 20px;
  margin-vertical: 20px;
`;

export const SignoutButton = styled(props => (
  <Button
    buttonStyle={{
      backgroundColor: PinkBalloon,
    }}
    title="Logout"
    raised
    {...props}
    icon={{
      name: 'logout',
      color: 'white',
    }}
    containerStyle={{
      margin: 10,
      marginRight: 30,
      borderRadius: 100,
      width: 150,
    }}
  />
))``;

export const Label = styled(props => <BasicText {...props} />)`
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
  align-self: center;
  color: ${PinkBalloon}; ;
`;
