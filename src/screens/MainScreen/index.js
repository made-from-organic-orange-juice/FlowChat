import React, {
  useContext,
  useState,
  useEffect,
  Fragment,
  useCallback,
} from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Context as AuthContext } from '../../shared/context/AuthContext';
import { useNavigation } from '@react-navigation/native';

// Styles
import {
  MainContainer,
  SignoutButton,
  BackgroundContainer,
  UserAvatar,
  AvatarContainer,
  Label,
  SignoutContainer,
  RoomContainer,
  ProfileDivider,
  ProfileImageContainer,
} from './styles';

const MainScreen = ({}) => {
  const { state, signout } = useContext(AuthContext);

  const [name, setName] = useState(
    state.userInformation?.additionalUserInfo?.profile?.name,
  );

  const [profile, setProfile] = useState(
    state.userInformation?.additionalUserInfo?.profile?.picture,
  );

  const [rooms, setRooms] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // make this a hook
  useEffect(() => {
    async function getRooms() {
      const collections = await firestore().collection('rooms').get();
      let rooms = [];

      collections.forEach(documentSnapshot => {
        rooms.push({
          id: documentSnapshot.id,
          data: documentSnapshot.data(),
        });
      });
      setRooms(rooms);
    }
    getRooms();
  }, [refreshing]);

  const keyExtractor = (item, index) => item.id;
  const renderItem = ({ item, index }) => (
    <ListItem
      onPress={() =>
        navigation.navigate('Chatroom', {
          roomId: item.id,
          name: name,
        })
      }
      Component={TouchableScale}
      friction={90} //
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //
      linearGradientProps={{
        colors: ['#a5516b', '#ce7793'],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      ViewComponent={LinearGradient} // Only if no expo
      containerStyle={{
        borderRadius: 25,
        margin: 5,
        height: 80,
      }}>
      <Icon name="chat" />
      <ListItem.Content>
        <ListItem.Title>{item.data.name}</ListItem.Title>
        <ListItem.Subtitle>{item.data.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <BackgroundContainer>
      <MainContainer>
        {rooms !== null ? (
          <Fragment>
            <ProfileImageContainer>
              <AvatarContainer>
                <UserAvatar
                  source={{
                    uri: profile,
                  }}
                />
                <Label>{name}</Label>
              </AvatarContainer>
            </ProfileImageContainer>
            <ProfileDivider />
            <RoomContainer>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                keyExtractor={keyExtractor}
                data={rooms}
                renderItem={renderItem}
              />
              <SignoutContainer>
                <SignoutButton onPress={() => signout()} />
              </SignoutContainer>
            </RoomContainer>
          </Fragment>
        ) : (
          <ActivityIndicator
            style={{ flex: 1 }}
            size="large"
            colors={['#a5516b', '#ce7793']}
          />
        )}
      </MainContainer>
    </BackgroundContainer>
  );
};

export default MainScreen;
