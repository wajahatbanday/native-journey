import {Image, StyleSheet, Text, View} from 'react-native';

type ProductCardProps = {
  title: string;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({title, image}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 20,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
  },
  title: {
    color: '#fff',
  },
  container: {
    width: 170,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
});
