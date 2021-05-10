import React, { useLayoutEffect, useState, useContext } from 'react';
import { TouchableOpacity, Text, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';
import useMessages from '../../shared/hooks/useMessages';
import { Context as AuthContext } from '../../shared/context/AuthContext';
import ChatBubble from './ChatBubble';

// Styles
import {
  MainContainer,
  BackgroundContainer,
  SendButtonContainer,
} from './styles';
import { View } from 'react-native-animatable';

const ChatRoom = ({ route }) => {
  const { roomId, name } = route.params;
  const navigation = useNavigation();
  const [messageValue, setMessageValue] = useState('');
  const messages = useMessages(roomId, 50);
  const { state } = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: <Text>{name}</Text>,
      headerStyle: { backgroundColor: '#a5516b' },
    });
  }, [navigation, name]);

  const sendMsg = () => {
    if (messageValue === '') {
      return;
    }
    firestore().collection('rooms').doc(roomId).collection('messages').add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      msg: messageValue,
      sendBy: state.userInformation?.additionalUserInfo?.profile?.name,
      uid: state.userInformation.user.uid,
    });
  };

  return (
    <BackgroundContainer>
      <MainContainer>
        <FlatList
          inverted
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <ChatBubble
              mine={item.uid === state.userInformation.user.uid}
              message={item.msg}
              sendBy={item.sendBy}
              time={item.createdAt}
            />
          )}
        />
      </MainContainer>
      <SendButtonContainer>
        <TextInput
          style={{
            flex: 1,
            marginHorizontal: 5,
          }}
          placeholder={'write your message here..'}
          autoCapitalize="none"
          autoCorrect={true}
          value={messageValue}
          onChangeText={setMessageValue}
          placeholderTextColor={'#a5516b'}
          blurOnSubmit={false}
          fontSize={16}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => sendMsg()}>
            <Icon name="send" color="#a5516b" size={50} />
          </TouchableOpacity>
        </View>
      </SendButtonContainer>
    </BackgroundContainer>
  );
};

export default ChatRoom;
