import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
