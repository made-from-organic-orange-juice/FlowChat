import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { MessageList, DocumentData, IMessage } from '../types';

const useMessages = (roomId: string, limit: number = 50): MessageList => {
  const [messages, setMessages] = useState<MessageList>([]);

  useEffect(() => {
    function Messages() {
      return firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .limit(limit)
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
          let list: any = [];
          querySnapshot.forEach((documentSnapshot: DocumentData) => {
            const data: any = documentSnapshot.data();
            const message: IMessage = {
              createdAt: data.createdAt,
              image: data.image,
              msg: data.msg,
              profilePic: data.profilePic,
              sendBy: data.sendBy,
              uid: data.uid,
            };
            list.push(message);
          });
          setMessages([...list]);
        });
    }
    const subscriber = Messages();

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [roomId, limit, messages]);

  return messages;
};

export default useMessages;
