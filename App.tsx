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

export default function App() {
  const [count, setCount] = useState(0);
  const [navItem, setNavItem] = useState('');
  const [modal, setModal] = useState(false);

  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ff5454',
      }}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View style={styles.centerBox}>
        <Text style={styles.text}>Welcome, SuperUser!</Text>
      </View>
      <View style={styles.centerBox}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.image1}
        />
        {/* <Image source={require('./public/home.png')} style={styles.image1} /> */}
      </View>
      <View style={styles.centerBox}>
        <Text style={styles.text}>{`Count is ${count}`}</Text>
        <View style={styles.button}>
          <Button onPress={handlePress} title="Count++" />
        </View>
      </View>
      <View style={styles.centerBox}>
        <Text>{`You clicked on ${navItem}`}</Text>
      </View>
      <View style={styles.fixedView}>
        <View style={styles.row}>
          {NavBarData.map((icon, index) => (
            <TouchableOpacity
              onPress={() => setNavItem(icon.label)}
              key={index}>
              <View style={styles.navItem}>
                <Image
                  source={navItem === icon.label ? icon.activeIcon : icon.icon}
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
      <View style={styles.button}>
        <Button onPress={() => setModal(prev => !prev)} title="Modal" />
      </View>
      {modal ? (
        <View style={styles.fullScreen}>
          <View style={styles.modal}>
            <View style={styles.close}>
              <Button
                title="X"
                onPress={() => setModal(false)}
                color={'#ff5454'}
              />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  close: {position: 'absolute', top: 5, right: 5},
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '80%',
    height: '70%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    borderRadius: 15,
    borderWidth: 1,
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
    backgroundColor: '#ff5454',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  safeArea: {
    marginBottom: 30,
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
  image1: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
});
