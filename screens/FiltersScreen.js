import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Switch,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{true: Colors.primaryColor}}
                value={props.value} 
                onValueChange={props.onChange} />
        </View>
    );
}

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLacFree, setIsLacFree] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lacFree: isLacFree,
            vegeterian: isVegeterian,
            vegan: isVegan
        };
        console.log(appliedFilters)
    }, [isGlutenFree, isLacFree, isVegeterian, isVegan]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' 
                value={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-free' 
                value={isLacFree} 
                onChange={newValue => setIsLacFree(newValue)}/>
            <FilterSwitch label='Vegeterian' 
                value={isVegeterian} 
                onChange={newValue => setIsVegeterian(newValue)}/>
            <FilterSwitch label='Vegan' 
                value={isVegan} 
                onChange={newValue => setIsVegan(newValue)}/>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>),
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;