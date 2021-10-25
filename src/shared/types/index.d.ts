import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

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
