import React, {useState} from 'react';
import {ScrollView, Text, View, Linking, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import EditableBox from '../../../components/EditableBox';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {styles} from './styles';

const Settings = () => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: 'User', email: 'user@email.com'});

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };
  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };

  return (
    <SafeAreaView>
      <Header title="Settings" />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Pressable onPress={onEditPress}>
              <Image
                style={styles.icon}
                source={require('../../../assets/edit.png')}
              />
            </Pressable>
          </View>
          <EditableBox
            label="Name"
            onChangeText={v => onChange('name', v)}
            value={values.name}
            editable={editing}
          />
          <EditableBox
            label="Email"
            onChangeText={v => onChange('email', v)}
            value={values.email}
            editable={editing}
          />
          {editing ? (
            <Button style={styles.button} onPress={onSave} title="Save" />
          ) : null}

          <Text style={[styles.sectionTitle, {marginTop: 40}]}>
            Help Center
          </Text>
          <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
          <ListItem
            onPress={onItemPress}
            style={styles.item}
            title="Contact Us"
          />
          <ListItem
            onPress={onItemPress}
            style={styles.item}
            title="Privacy & Terms"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;