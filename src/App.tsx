/* eslint-disable react-native/no-inline-styles */
// Libraries
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

// Includes
import { Provider as AuthProvider } from './shared/context/AuthContext';
import Routes from './routes';

const App: FC = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </AuthProvider>
  );
};

export default App;
