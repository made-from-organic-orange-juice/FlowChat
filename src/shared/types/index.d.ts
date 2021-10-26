import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * useMessages types
 *
 */

export interface IMessage {
  createdAt: FirebaseFirestoreTypes.Timestamp;
  image: string;
  msg: string;
  profilePic: string;
  sendBy: string;
  uid: string;
}

export type MessageList = IMessage[];
export type DocumentData = FirebaseFirestoreTypes.DocumentData;

/**
 * ErrorBox Types
 */

export interface ErrorProps {
  // if a screen is processing and it encountered an error.
  // this will be called.
  onError: () => void;
}

/**
 * authContext Types
 */

export interface ReducerActions {
  SignIn: string;
  SignOut: string;
  SetError: string;
  ClearError: string;
}

export interface ActionType {
  type: string;
  payload: any;
}

export interface ReducerType {
  authReducer: (state: any, action: ActionType) => any;
}

/**
 * Auth Types
 */

export interface AuthType {
  webClientId: string;
}

/**
 * Colors Types
 */

export interface ColorType {
  LogoBackground: string;
  LightBlue: string;
  PastalMutedBlue: string;
  PastalYallow: string;
  PastalOrange: string;
  PastalRed: string;
  PastalBlue: string;
  PastalGreen: string;
  Red: string;
  White: string;
}

/**
 *
 * MainScreen Types
 *
 */

export interface Room {
  id: string;
  data: DocumentData;
}

export type Rooms = Room[];

/**
 * Navigation
 */

export type RootStackParamList = {
  Main: undefined;
  Chatroom: undefined;
  Signin: undefined;
};

export type SigninScreenProp = StackNavigationProp<
  RootStackParamList,
  'Signin'
>;
export type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
export type ChatroomScreenProp = StackNavigationProp<
  RootStackParamList,
  'Chatroom'
>;

/**
 * ChatItem Types
 */

export interface ChatItemProps {
  item: DocumentData;
}

/**
 * ChatBubble Types
 */

export interface ChatBubbleProps {
  mine: boolean;
  message: string;
  sendBy: string;
  time: FirebaseFirestoreTypes.Timestamp;
  image: string;
}
