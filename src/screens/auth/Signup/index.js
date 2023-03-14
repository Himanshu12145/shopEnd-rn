import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Signup;
