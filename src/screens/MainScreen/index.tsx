/* eslint-disable react-native/no-inline-styles */
// Libraries
import React, {
  useContext,
  useState,
  useEffect,
  Fragment,
  useCallback,
} from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

// Includes
import { Context as AuthContext } from '../../shared/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import ErrorBox from '../../shared/components/ErrorBox';

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
  PastalBlue,
  PastalMutedBlue,
  PastalOrange,
  PastalYallow,
} from './styles';
import { View } from 'react-native-animatable';
import useRooms from '../../shared/hooks/useRooms';

/********************************************************************************
 *  MainScreen
 * ******************************************************************************/

const MainScreen = () => {
  const { state, signout } = useContext(AuthContext);
  const navigation = useNavigation();
  const rooms = useRooms();
  const [refreshing, setRefreshing] = useState(false);

  const name = state.userInformation?.additionalUserInfo?.profile?.name;
  const profile = state.userInformation?.additionalUserInfo?.profile?.picture;

  // Pull to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {}, [refreshing]);
  const keyExtractor = (item: { id: string }) => item.id;

  // Render the rooms you can join
  const renderItem = ({ item }: any) => (
    <ListItem
      onPress={() =>
        navigation.navigate('Chatroom', {
          roomId: item.id,
          name: name,
        })
      }
      Component={TouchableScale}
      friction={90} // These props are passed to the parent component (here TouchableScale)
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //These props are passed to the parent component (here TouchableScale)
      linearGradientProps={{
        colors: [PastalOrange, PastalYallow],
        start: { x: 1, y: 0 },
        end: { x: 0.05, y: 0 },
      }}
      ViewComponent={LinearGradient} // Only if no expo
      containerStyle={{
        borderRadius: 10,
        margin: 5,
        height: 80,
      }}>
      <Icon name="chat" />
      <ListItem.Content>
        <ListItem.Title>{item.data.name}</ListItem.Title>
        <ListItem.Subtitle>{item.data.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color={'white'} />
    </ListItem>
  );

  return (
    <View style={{ flex: 1 }}>
      <ErrorBox
        onError={() => {
          // do nothing
        }}
      />

      <BackgroundContainer>
        <MainContainer>
          <ProfileImageContainer>
            <AvatarContainer>
              <UserAvatar
                source={{
                  uri: profile,
                }}
              />
            </AvatarContainer>
            <Label> Welcome {name}</Label>
            <SignoutContainer>
              <SignoutButton onPress={signout} />
            </SignoutContainer>
          </ProfileImageContainer>
          {rooms !== null ? (
            <Fragment>
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
              </RoomContainer>
            </Fragment>
          ) : (
            <ActivityIndicator
              style={{ flex: 1 }}
              size="large"
              colors={[PastalBlue, PastalMutedBlue]}
            />
          )}
        </MainContainer>
      </BackgroundContainer>
    </View>
  );
};

export default MainScreen;
