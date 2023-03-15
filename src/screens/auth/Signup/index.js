import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {};
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />

      <Input label="Name" placeholder="Your Name" />

      <Input label="E-mail" placeholder="example@gmail.com" />

      <Input isPassword label="Password" placeholder="******" />

      <View style={styles.agreedRow}>
        <Checkbox onCheck={setChecked} checked={checked} />
        <Text style={styles.agreedText}>
          I agree with the <Text style={styles.agreedTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreedTextBold}>Policy</Text>
        </Text>
      </View>
      <Button title="Sign Up" style={styles.button} />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.footerLink} onPress={onSignIn}>
          Sign In
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default Signup;
