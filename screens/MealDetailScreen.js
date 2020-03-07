import React, { useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [selectedMeal]);

    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFavorite });
    }, [currentMealIsFavorite]);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Back to categories" onPress={() => {
                props.navigation.popToTop(); 
            }} />
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Favorite' 
                iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite} />
        </HeaderButtons>)
    };
};

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MealDetailScreen;