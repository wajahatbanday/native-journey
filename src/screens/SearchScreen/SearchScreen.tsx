import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export const SearchScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {backgroundColor: '#f9a602'},
  container: {
    height: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
