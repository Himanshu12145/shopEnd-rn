import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../assets/splash_image.png')}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find </Text>
          <Text style={[styles.title, styles.innerTitle]}> All you need</Text>
          <Text style={styles.title}>Here!</Text>
        </View>

        <Button onPress={onSignUp} title="Sign Up" />

        <Pressable hitSlop={20} onPress={onSignIn}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
