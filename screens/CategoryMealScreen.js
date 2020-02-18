import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId'); 

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return (
        <View style={styles.screen}>
            <Text>The CategoryMealScreen screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to meal detail" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.goBack();
            }} />
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