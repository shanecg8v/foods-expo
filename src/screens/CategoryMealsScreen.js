import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const avilableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = avilableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
