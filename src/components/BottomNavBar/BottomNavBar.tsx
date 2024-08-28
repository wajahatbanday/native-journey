import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {NavBarData} from '../../constants';
import React from 'react';

export function BottomNavBar({navigation}: any) {
  return (
    <View style={styles.fixedView}>
      <View style={styles.row}>
        {NavBarData.map((icon, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(icon.nav)}
            key={index}>
            <View style={styles.navItem}>
              <Image source={icon.icon} style={styles.iconImage} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {width: '100%', height: '100%'},
  iconImage: {width: 32, height: 32},
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
});
