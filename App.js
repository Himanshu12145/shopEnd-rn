import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Signin from './src/screens/auth/Signin';
const WEB_CLIENT_ID =
  '806988529228-vsomgtbgb23pakb5gc80vf56dr5a7137.apps.googleusercontent.com';

function App() {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signin />
    </SafeAreaView>
  );
}

export default App;
