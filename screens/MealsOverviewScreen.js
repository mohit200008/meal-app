import {  useLayoutEffect } from 'react';
import MealList from '../components/MealList/MealList';

// import { useRoute } from '@react-navigation/native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

function MealOverviewScreens({ route,navigation }) {
    // const route = useRoute();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId,navigation])
  

    return <MealList items={displayedMeals} />
   
}

export default MealOverviewScreens

