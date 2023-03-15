import {ScrollView, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const onSignUp = () => {};
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="E-mail" placeholder="example@gmail.com" />

      <Input isPassword label="Password" placeholder="******" />

      <Button title="Sign In" style={styles.button} />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.footerLink} onPress={onSignUp}>
          Sign Up
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default Signin;
