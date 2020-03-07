import React from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem'

const MealList = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealData = itemData => {
        const isFav = favMeals.some(meal => meal.id === itemData.item.id);
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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFav
                        }
                    });
                }}/>
    };
    
    return <View style={styles.list}>
        <FlatList 
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealData}
            style={{width: '100%'}}
        />
    </View>
};

const styles = StyleSheet.create({
    list: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MealList;