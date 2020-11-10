import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    const isFavorite = favoriteMeals.some((meal) => meal.id === item.id);
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        imageUrl={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: item.id,
            mealTitle: item.title,
            isFav: isFavorite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
