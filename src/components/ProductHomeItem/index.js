import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {styles} from './styles';
import {API_BASE_URL} from '@env';

const ProductHomeItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{uri: `${API_BASE_URL}/${image?.path}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>₹ {price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
