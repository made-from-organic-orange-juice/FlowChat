// Libraries
import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { formatDistance } from 'date-fns';

// Includes
import { Context as AuthContext } from '../../../shared/context/AuthContext';
import ChatBubble from '../ChatBubble';
import BasicText from '../../../shared/components/BasicText';
import { ChatItemProps } from '../../../shared/types';
// Styles
import { ChatAvatar, SentContainer } from './styles';

const ChatItem: FC<ChatItemProps> = ({ item }) => {
  const { state } = useContext(AuthContext);
  const isUser = item.uid === state.userInformation.user.uid;

  return (
    <View>
      <BasicText> {item.sendBy}</BasicText>
      <ChatBubble
        mine={isUser}
        message={item.msg}
        sendBy={item.sendBy}
        time={item.createdAt}
        image={item.image}
      />
      <ChatAvatar isUser={isUser} pic={item.profilePic} />
      {/* for some reason conditional doesnt work with styled components?  */}
      <SentContainer
        style={{
          alignSelf: isUser ? 'flex-start' : 'flex-end',
        }}>
        <BasicText fontSize={10} textColor={'black'}>
          Sent{' '}
          {formatDistance(
            new Date(),
            item.createdAt ? item.createdAt.toDate() : new Date(),
          )}{' '}
          ago by {item.sendBy}.
        </BasicText>
      </SentContainer>
    </View>
  );
};

export default ChatItem;
