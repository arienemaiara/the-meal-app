import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The MealDetailScreen screen</Text>
            <Button title="Back to categories" onPress={() => {
                props.navigation.popToTop(); 
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

export default MealDetailScreen;