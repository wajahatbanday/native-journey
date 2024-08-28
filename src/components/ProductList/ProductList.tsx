import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardData} from '../../constants';
import {ProductCard} from '../ProductCard';

export const ProductList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContent}>
          <View>
            <Text style={styles.text}>Product List</Text>
          </View>
          <View style={styles.listContainer}>
            {CardData.map((card, index) => (
              <ProductCard title={card.title} image={card.image} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 20,
  },
  text: {
    fontSize: 24,
  },
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    gap: 20,
  },
});
