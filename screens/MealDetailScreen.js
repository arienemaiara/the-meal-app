import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The MealDetailScreen screen</Text>
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

export default MealDetailScreen;