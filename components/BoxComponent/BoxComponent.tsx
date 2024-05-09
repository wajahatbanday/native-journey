import React from 'react';
import {StyleSheet, View} from 'react-native';

type BoxComponentProps = {
  bgColor: string;
};

export const BoxComponent: React.FC<BoxComponentProps> = ({bgColor}) => {
  return <View style={[styles.box, {backgroundColor: bgColor}]}></View>;
};

const styles = StyleSheet.create({
  box: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
});
