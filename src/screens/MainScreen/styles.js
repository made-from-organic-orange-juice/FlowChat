import React from 'react';
import styled from 'styled-components/native';
import BasicText from '../../shared/components/BasicText';
import { Colors } from '../../shared/constants/colors';
import { Button, Avatar, Divider } from 'react-native-elements';

export const {
  PastalMutedBlue,
  PastalYallow,
  PastalRed,
  PastalBlue,
  LightBlue,
  PastalOrange,
} = Colors;

export const ProfileDivider = styled(props => (
  <Divider style={{ backgroundColor: PastalMutedBlue, marginHorizontal: 40 }} />
))``;

export const AvatarContainer = styled.View`
  flex: 1;
  align-self: center;
  width: 200px;
  flex-direction: column;
`;

export const ProfileImageContainer = styled.View`
  flex: 0.3;
  margin-horizontal: 20px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${PastalBlue};
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: { width: 0, height: 2};
  shadow-radius: 10px;
  elevation: 3;
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
  background-color: white;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: { width: 0, height: 2};
  shadow-radius: 10px;
  elevation: 3;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PastalMutedBlue};
`;

export const SignoutContainer = styled.View`
  flex: 0.5;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.View`
  flex: 1;
  border-radius: 10px;
  background-color: ${LightBlue};
  margin-horizontal: 5px;
  margin-vertical: 5px;
`;

export const SignoutButton = styled(props => (
  <Button
    buttonStyle={{
      backgroundColor: PastalRed,
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
  color: white;
`;
