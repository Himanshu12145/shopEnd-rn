import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {styles} from './styles';
const Profile = ({navigation}) => {
  const num = 10;
  const onLogout = () => {};
  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };
  const onMyListingsPress = () => {
    navigation.navigate('MyListings');
  };
  const onNewListingPress = () => {
    navigation.navigate('CreateListing');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.email}>User Email</Text>
          <ListItem
            onPress={onMyListingsPress}
            title="My Listings"
            subtitle={`You have ${num} listings`}
          />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle={`Account , FAQ's,Contact`}
          />
        </View>
        <Button
          onPress={onNewListingPress}
          style={{flex: 0}}
          title="Add New Listing"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
