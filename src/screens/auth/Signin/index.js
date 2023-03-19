import {ScrollView, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserContext} from '../../../../App';
import {login} from '../../../utils/backendCalls';

const Signin = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const onSignUp = () => {
    navigation.navigate('Signup');
  };
  const onBack = () => {
    navigation.goBack();
  };

  const [values, setValues] = useState({});

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    const token = await login(values);

    setUser({token});
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={onBack} />

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

        <Button onPress={onSubmit} title="Sign In" style={styles.button} />
        <Separator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.footerLink} onPress={onSignUp}>
            Sign Up
          </Text>{' '}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
