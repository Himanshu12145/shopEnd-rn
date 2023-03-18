import React, {useContext} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import {ServicesContext} from '../../../../App';
import {updateService} from '../../../utils/backendCalls';
import {products} from '../../../data/products';
import Button from '../../../components/Button';

const MyListings = ({navigation}) => {
  // const {services, setServices} = useContext(ServicesContext);
  // const likedServices = Array.isArray(services)
  //   ? services?.filter(service => service?.liked)
  //   : [];

  const renderItem = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    // const onRemove = async () => {
    //   const updatedServices = await updateService(item?._id, {liked: false});
    //   if (Array.isArray(updatedServices)) {
    //     setServices(updatedServices);
    //   }
    // };
    // const onIconPress = () => {
    //   Alert.alert(
    //     'Are you sure you want to remove this item from your favorites?',
    //     '',
    //     [{text: 'Yes', onPress: onRemove}, {text: 'Cancel'}],
    //   );
    // };
    return (
      <FavoriteItem
        onPress={onProductPress}
        icon={require('../../../assets/delete.png')}
        // onIconPress={onIconPress}
        {...item}
      />
    );
  };
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView>
      <Header title="My Listings" showBack onBackPress={goBack} />

      <FlatList
        ListEmptyComponent={
          <>
            <View
              style={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{marginTop: 100, color: 'black'}}>...</Text>
              <Text
                style={{
                  marginTop: 10,
                  color: 'black',
                  fontSize: 18,
                }}>
                You do not have any Listings yet
              </Text>
              <Text style={{marginTop: 10, color: 'black'}}>...</Text>
            </View>
            <View style={{padding: 24}}>
              <Button
                onPress={() => navigation.navigate('CreateListing')}
                title="Add New Listing"
              />
            </View>
          </>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
