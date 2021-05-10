import styled from 'styled-components/native';
import { Colors } from '../../shared/constants/colors';

export const {
  PastalMutedBlue,
  PastalYallow,
  PastalRed,
  PastalBlue,
  PastalGreen,
} = Colors;

export const RoomContainer = styled.View`
  flex: 1;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  background-color: ${PastalMutedBlue};
`;

export const Field = styled.View`
  flex-direction: row;
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

export const MainContainer = styled.View`
  flex: 1;
  border-radius: 10px;
  background-color: white;
  margin-horizontal: 5px;
  margin-vertical: 5px;
`;

export const SendButtonContainer = styled.View`
  height: 100px;
  background-color: white;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
`;

export const ImageFileNameContainer = styled.View`
  background-color: ${PastalGreen};
  border-radius: 10px;
`;
