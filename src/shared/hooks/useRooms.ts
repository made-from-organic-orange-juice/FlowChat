import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Rooms } from '../types';

const useRooms = (): Rooms => {
  const [rooms, setRooms] = useState<Rooms>([]);

  useEffect(() => {
    function getRooms() {
      return firestore()
        .collection('rooms')
        .onSnapshot(querySnapshot => {
          let availableRooms: Rooms = [];
          querySnapshot.forEach(documentSnapshot => {
            availableRooms.push({
              id: documentSnapshot.id,
              data: documentSnapshot.data(),
            });
          });
          setRooms(availableRooms);
        });
    }
    const subscriber = getRooms();

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [rooms]);

  return rooms;
};

export default useRooms;
