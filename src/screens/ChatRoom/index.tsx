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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

// Includes
import useMessages from '../../shared/hooks/useMessages';
import { Context as AuthContext } from '../../shared/context/AuthContext';
import ErrorBox from '../../shared/components/ErrorBox';
import { ChatroomScreenProp } from '../../shared/types';

// Styles
import {
  MainContainer,
  BackgroundContainer,
  SendButtonContainer,
  PastalBlue,
  ImageFileNameContainer,
} from './styles';
import ChatItem from './ChatItem';

/********************************************************************************
 *  ChatRoom Component
 * ******************************************************************************/

const ChatRoom = ({ route }: any) => {
  const { roomId, name } = route.params;
  const navigation = useNavigation<ChatroomScreenProp>();
  const [messageValue, setMessageValue] = useState('');
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const messages = useMessages(roomId, 50);
  const { state, setErrorMessage } = useContext(AuthContext);

  // set the header with the users name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: name,
      headerStyle: { backgroundColor: PastalBlue },
    });
  }, [navigation, name]);

  // Is used for clearing the text input after, sending a msg
  const textInputRef = useRef(null);

  const sendMsg = () => {
    // if the input and image is empty
    if (messageValue === '' && image === null) {
      return;
    }

    // otherwise.. send the msg to firestore..
    firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .add({
        createdAt: firestore.FieldValue.serverTimestamp(),
        msg: messageValue,
        sendBy: state.userInformation?.additionalUserInfo?.profile?.name,
        uid: state.userInformation.user.uid,
        profilePic: state.userInformation?.additionalUserInfo?.profile?.picture,
        image: image,
      })
      .catch(err => {
        setErrorMessage(err);
      });
    textInputRef.current.clear();
    Keyboard.dismiss();
    setImageFileName('');
    setImage(null);
    setMessageValue('');
  };

  const uplImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 200,
      maxHeight: 250,
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        setErrorMessage(response.errorMessage);
        return;
      }

      if (response.didCancel) {
        return;
      }

      // base 64
      setImage('data:image/' + response.type + ';base64,' + response.base64);
      setImageFileName(response.fileName);
    });
  };

  return (
    <BackgroundContainer>
      <ErrorBox
        onError={() => {
          // do nothing
          // it shows the red box automatically!
        }}
      />
      <MainContainer>
        <FlatList
          inverted
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <ChatItem item={item} />}
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
