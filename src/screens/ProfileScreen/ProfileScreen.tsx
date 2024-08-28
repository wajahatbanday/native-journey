import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.parentContainer}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Wajahat Banday</Text>
        </View>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  profileName: {
    fontSize: 18,
  },
  settingsText: {
    fontSize: 18,
  },
});
