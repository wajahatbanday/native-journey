import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ProductList} from '../../components/ProductList';
import {useAuth} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {CardData} from '../../constants';
import {RootStackParamList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export const HomeScreen = () => {
  const {logout} = useAuth();

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleProductPress = (product: (typeof CardData)[0]) => {
    navigation.navigate('ProductScreen', {data: product});
  };

  return (
    <View style={styles.viewContainer}>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.centerBox}>
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={styles.userPicture}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.text}>Welcome, Wajahat!</Text>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => logout()}>
            <Image
              source={require('../../../images/logout.png')}
              style={styles.logout}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ProductList onProductPress={handleProductPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  iconImage: {width: 32, height: 32},
  logout: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    borderBottomWidth: 0,
    borderBottomColor: '#f9a602',
    backgroundColor: '#f9a602',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoSignIn: {
    width: '100%',
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'cover',
  },
  logoutContainer: {
    width: 25,
    height: 25,
  },
  signIn: {
    width: '50%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#f9a602',
    borderRadius: 10,
    alignSelf: 'center',
  },
  close: {position: 'absolute', top: 5, right: 5, padding: 5},
  fullScreen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '70%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    borderRadius: 15,
  },
  navItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
  },
  fixedView: {
    display: 'flex',
    width: '100%',
    height: 80,
    backgroundColor: '#f9a602',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#f9a602',
    borderRadius: 10,
  },
  safeArea: {
    backgroundColor: '#f9a602',
  },
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  text: {
    color: '#000',
  },
  userPicture: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
});
