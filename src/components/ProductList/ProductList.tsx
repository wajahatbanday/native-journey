import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CardData} from '../../constants';
import {ProductCard} from '../ProductCard';
import React from 'react';

type ProductListProps = {
  onProductPress: (data: (typeof CardData)[0]) => void;
};

export const ProductList: React.FC<ProductListProps> = ({onProductPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContent}>
          <View style={styles.listContainer}>
            {CardData.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onProductPress(card)}>
                <ProductCard title={card.title} image={card.image} />
              </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 150,
    paddingTop: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});
