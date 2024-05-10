import {ScrollView, StyleSheet, View} from 'react-native';
import {CardData} from '../../constants';
import {ProductCard} from '../ProductCard';

export const ProductList = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.listContainer}>
          {CardData.map((card, index) => (
            <ProductCard title={card.title} image={card.image} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
