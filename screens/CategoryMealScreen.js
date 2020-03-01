import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {

    const renderMealData = itemData => {
        return <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({ 
                        routeName: 'MealDetail', 
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}/>
    }

    const categoryId = props.navigation.getParam('categoryId'); 

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealData}
                style={{width: '100%'}}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId'); 
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    };
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CategoryMealScreen;