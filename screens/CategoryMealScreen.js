import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoryMealScreen screen</Text>
            <Button title="Go to meal detail" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CategoryMealScreen;