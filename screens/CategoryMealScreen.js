import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoryMealScreen screen</Text>
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