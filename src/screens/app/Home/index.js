import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find All You Need" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
