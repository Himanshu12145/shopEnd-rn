import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign Up" onBackPress={onBack} />

        <Input label="Name" placeholder="Your Name" />

        <Input label="E-mail" placeholder="example@gmail.com" />

        <Input isPassword label="Password" placeholder="******" />

        <View style={styles.agreeRow}>
          <Checkbox onCheck={setChecked} checked={checked} />
          <Text style={styles.agreeText}>
            I agree with the <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Policy</Text>
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
    </SafeAreaView>
  );
};

export default Signup;
