/* eslint-disable react-native/no-inline-styles */

// Libraries
import React, { useLayoutEffect, useState, useContext, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  FlatList,
  View,
  TextInput,
  Keyboard,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, Avatar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import { formatDistance } from 'date-fns';
import { launchImageLibrary } from 'react-native-image-picker';

// Includes
import useMessages from '../../shared/hooks/useMessages';
import { Context as AuthContext } from '../../shared/context/AuthContext';
import ChatBubble from './ChatBubble';
import BasicText from '../../shared/components/BasicText';

// Styles
import {
  MainContainer,
  BackgroundContainer,
  SendButtonContainer,
  PastalBlue,
  ImageFileNameContainer,
} from './styles';

/********************************************************************************
 *  ChatRoom Component
 * ******************************************************************************/

const ChatRoom = ({ route }) => {
  const { roomId, name } = route.params;
  const navigation = useNavigation();
  const [messageValue, setMessageValue] = useState('');
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const messages = useMessages(roomId, 50);
  const { state } = useContext(AuthContext);

  // set the header with the users name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: <Text>{name}</Text>,
      headerStyle: { backgroundColor: PastalBlue },
    });
  }, [navigation, name]);

  // Is used for clearing the text input after, sending a msg
  const textInputRef = useRef(null);

  const sendMsg = () => {
    // if we didnt send anything..
    if (messageValue === '' && image === null) {
      return;
    }

    // otherwise.. send the msg to firestore..
    // TODO: make this available thru a context
    firestore().collection('rooms').doc(roomId).collection('messages').add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      msg: messageValue,
      sendBy: state.userInformation?.additionalUserInfo?.profile?.name,
      uid: state.userInformation.user.uid,
      profilePic: state.userInformation?.additionalUserInfo?.profile?.picture,
      image: image,
    });
    textInputRef.current.clear();
    Keyboard.dismiss();
    setImageFileName('');
    setImage(null);
    setMessageValue('');
  };

  const uplImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 200,
      maxHeight: 250,
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        Alert.alert(response.errorMessage);
        return;
      }
      // base 64
      setImage('data:image/' + response.type + ';base64,' + response.base64);
      setImageFileName(response.fileName);
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
            <View>
              <BasicText> {item.sendBy}</BasicText>

              <ChatBubble
                mine={item.uid === state.userInformation.user.uid}
                message={item.msg}
                sendBy={item.sendBy}
                time={item.createdAt}
                image={item.image}
              />
              <Avatar
                containerStyle={{
                  alignSelf:
                    item.uid === state.userInformation.user.uid
                      ? 'flex-start'
                      : 'flex-end',
                }}
                rounded
                source={{
                  uri: item.profilePic,
                }}
              />
              <View
                style={{
                  alignSelf:
                    item.uid === state.userInformation.user.uid
                      ? 'flex-start'
                      : 'flex-end',
                  margin: 5,
                }}>
                <BasicText fontSize={10} textColor={'black'}>
                  Sent{' '}
                  {formatDistance(
                    new Date(),
                    item.createdAt ? item.createdAt.toDate() : new Date(),
                  )}{' '}
                  ago by {item.sendBy}.
                </BasicText>
              </View>
            </View>
          )}
        />
      </MainContainer>
      {image ? (
        <ImageFileNameContainer>
          <Text> Filename: {imageFileName}</Text>
        </ImageFileNameContainer>
      ) : null}

      <SendButtonContainer>
        <TextInput
          ref={ref => {
            textInputRef.current = ref;
          }}
          style={{
            flex: 1,
            marginHorizontal: 5,
          }}
          placeholder={'write your message here..'}
          autoCapitalize="none"
          autoCorrect={true}
          value={messageValue}
          onChangeText={setMessageValue}
          placeholderTextColor={'black'}
          color={'black'}
          blurOnSubmit={false}
          fontSize={16}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => sendMsg()}>
            <Icon name="send" color={PastalBlue} size={50} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => uplImage()}>
            <Icon name="camera" color={PastalBlue} size={50} />
          </TouchableOpacity>
        </View>
      </SendButtonContainer>
    </BackgroundContainer>
  );
};

export default ChatRoom;
