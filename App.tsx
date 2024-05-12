import {useState} from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavBarData} from './constants';
import {SignInForm} from './components';
import {ProductList} from './components/ProductList';

export default function App() {
  const [navItem, setNavItem] = useState('');
  const [modal, setModal] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const checkSignedIn = (newState: boolean) => {
    setSignedIn(newState);
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      {signedIn ? (
        <>
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
              <TouchableOpacity onPress={() => setSignedIn(false)}>
                <Image
                  source={require('./images/logout.png')}
                  style={styles.logout}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ProductList />
        </>
      ) : (
        <View style={styles.logoSignIn}>
          <View>
            <Image style={styles.logo} source={require('./images/harud.png')} />
          </View>
          <View style={styles.signIn}>
            <Button
              onPress={() => setModal(prev => !prev)}
              title="Sign In"
              color={'#fff'}
            />
          </View>
        </View>
      )}

      {modal ? (
        <View style={styles.fullScreen}>
          <View style={styles.modal}>
            <View style={styles.close}>
              <Button
                title="X"
                onPress={() => setModal(false)}
                color={'#f9a602'}
              />
            </View>
            <SignInForm
              onSignIn={() => {
                setModal(false);
                setSignedIn(true);
              }}
            />
          </View>
        </View>
      ) : null}
      {signedIn ? (
        <View style={styles.fixedView}>
          <View style={styles.row}>
            {NavBarData.map((icon, index) => (
              <TouchableOpacity
                onPress={() => setNavItem(icon.label)}
                key={index}>
                <View style={styles.navItem}>
                  <Image
                    source={icon.icon}
                    style={{
                      width: 32,
                      height: 32,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
