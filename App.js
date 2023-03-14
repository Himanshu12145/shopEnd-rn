import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';

function App() {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signup />
    </SafeAreaView>
  );
}

export default App;
