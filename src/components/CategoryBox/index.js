import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import Input from '../Input';
import {styles} from './styles';

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
