import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const Home = () => {
  const INGREDIENTS = [
    {
      title: 'Produce',
      data: [
        'Purple Cabbage',
        'Extra firm Tofu',
        'Carrot',
        'Fuji Apple',
        'Green Onion',
        'Leafy Greens',
      ],
    },
    { title: 'Condiments', data: ['Mayo', 'Salt', 'Sriracha', 'Soy Sauce'] },
    {
      title: 'Baking/Bakery',
      data: [
        'Flour',
        'Panko Crumbs',
        'Burger Buns',
        'Avocado Oil',
        'White Sesame Seeds',
      ],
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={INGREDIENTS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'white',
    paddingVertical: 10,
    padding: 10,
  },
  item: {
    paddingHorizontal: 20,
  },
});

export default Home;
