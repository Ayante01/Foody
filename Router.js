import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from "@react-navigation/stack";

import {HomeScreen, CategoryScreen, MealScreen} from './src/screens';

import constants from './src/utils/constants';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={constants.SCREEN.HOME}>
                <Stack.Screen 
                    name={constants.SCREEN.HOME} 
                    component={HomeScreen} 
                    options={{ 
                        title : '',
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}>
                </Stack.Screen>
                <Stack.Screen 
                    name={constants.SCREEN.CATEGORY} 
                    component={CategoryScreen} 
                    options={{ 
                        title : '',
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}>
                </Stack.Screen>
                <Stack.Screen 
                    name={constants.SCREEN.MEAL} 
                    component={MealScreen} 
                    options={{ 
                        title : '',
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
