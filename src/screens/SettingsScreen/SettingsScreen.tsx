import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export const SettingsScreen = () => {
  return (
    <View style={styles.parentContainer}>
      <SafeAreaView />
      <Text>React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {width: '100%', height: '100%'},
});
