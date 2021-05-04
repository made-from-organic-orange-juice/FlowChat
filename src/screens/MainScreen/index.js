import React, { useContext, useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

import { Context as AuthContext } from '../../shared/context/AuthContext';

// Styles
import { MainContainer, Label, SignoutButton } from './styles';

const MainScreen = ({}) => {
  const { state, signout } = useContext(AuthContext);
  const [name, setName] = useState(
    state.userInformation?.additionalUserInfo?.profile?.name,
  );

  return (
    <MainContainer>
      <Label>Hello {name} You are now Logged in using Google!</Label>
      <SignoutButton onPress={() => signout()} />
    </MainContainer>
  );
};

export default MainScreen;
