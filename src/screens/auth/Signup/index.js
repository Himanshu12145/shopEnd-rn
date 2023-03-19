import {Alert, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {request} from '../../../utils/request';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  const onBack = () => {
    navigation.goBack();
  };
  const onSubmit = async () => {
    try {
      if (
        !values?.fullName ||
        !values?.email ||
        !values?.password ||
        !values?.confirmPassword
      ) {
        Alert.alert('All fields are required');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      if (!checked) {
        Alert.alert('Please agree to the terms');
        return;
      }

      // const token = await signup(values);
      // setUser({token});

      const response = await request({
        url: '/user/register',
        method: 'POST',
        data: values,
      });

      console.log(response);

      console.log('token :>> ', token);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign Up" onBackPress={onBack} />

        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          label="Name"
          placeholder="John Doe"
        />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          label="E-mail"
          placeholder="example@gmail.com"
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          label="Password"
          placeholder="*******"
        />
        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          label="Confirm Password"
          placeholder="*******"
        />

        <View style={styles.agreeRow}>
          <Checkbox onCheck={setChecked} checked={checked} />
          <Text style={styles.agreeText}>
            I agree with the <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Policy</Text>
          </Text>
        </View>
        <Button onPress={onSubmit} title="Sign Up" style={styles.button} />
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

export default React.memo(Signup);
