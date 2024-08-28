import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;
type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductScreen'
>;

export const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const navigation = useNavigation<ProductScreenNavigationProp>();
  const {data} = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.parentContainer}>
      <SafeAreaView />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productDetailContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${data.price}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{data.title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{data.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 150,
  },
  header: {
    paddingHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 18,
    color: '#f9a602',
  },
  productDetailContainer: {
    width: '100%',
    height: '100%',
    gap: 20,
  },
  imageContainer: {
    width: '100%',
    height: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  priceContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  priceText: {
    fontSize: 24,
    color: '#f9a602',
  },
  titleContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
    color: '#000',
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
  },
});
