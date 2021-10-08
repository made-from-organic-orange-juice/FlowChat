import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const useMessages = (roomId, limit) => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    function Messages() {
      return firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .limit(limit)
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
          const messageList = [];
          querySnapshot.forEach(documentSnapshot => {
            messageList.push(documentSnapshot.data());
          });
          setMessages(messageList);
        });
    }
    const subscriber = Messages();

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [roomId, limit]);

  return messages;
};

export default useMessages;
