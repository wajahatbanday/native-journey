import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SignInForm} from '../../components';
export function LoginScreen() {
  return (
    <View style={styles.parentContainer}>
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
  },
});
