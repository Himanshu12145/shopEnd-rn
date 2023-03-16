import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {colors} from '../../utils/colors';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePressed = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          style={[styles.input, {margin: 0}]}
        />
        {isPassword ? (
          <Pressable onPress={onEyePressed}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye_closed.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
