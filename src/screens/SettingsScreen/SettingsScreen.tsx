import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Box} from '../../components';

export const SettingsScreen = () => {
  return (
    <Box width={'100%'} height={'100%'}>
      <SafeAreaView />
      <Box width={'100%'} height={'90%'} centered>
        <Text>Settings With Shopify Restyle</Text>
      </Box>
    </Box>
  );
};
