import React, {useEffect, useState} from 'react'
import { View,Text, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import axios from '../utils/axios';
import constants from '../utils/constants';

import Category from '../components/Category';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fontsName } from '../utils/fonts';

export const HomeScreen = ({navigation}) => {

    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        axios
        .get('categories.php')
        .then((res) => {
            setCategories(res.data.categories);
        })
        .catch((err) => {console.log(err)});
    }, [setCategories]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <View style={styles.logoContainer}>
                        <MaterialCommunityIcons name="chef-hat" size={60} color={constants.COLORS.BROWN} />
                        <Text style={styles.logoText}>Foody</Text>
                    </View>
                    
                    <Text style={styles.title}>Welcome</Text>
                </View>
                <View style={styles.quoteContainer}>
                    <Text style={styles.quote}>Delicious recipes are waiting for you!</Text>
                </View>
            </View>
            <View style={styles.carrousel}>
                <ScrollView 
                    horizontal={true}
                    style={styles.list}
                >{
                    categories.map( category =>{
                        return(
                            <Category key={category.idCategory} category={category} navigation={navigation}></Category>
                        );
                    })
                }
                </ScrollView>
            </View>
            <View style={styles.choose}>
                <Text style={styles.text}>Choose your favorite</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: constants.COLORS.WHITE,
    },
    list: {
        paddingHorizontal: 25,

    },
    titleContainer: {
        flexDirection:"row",
        marginTop:70,
        marginBottom:8,
        marginLeft:25,
        alignItems: "flex-end",
    },
    title: {
        color: constants.COLORS.PRIMARY_YELLOW,
        fontSize: 38,
        marginLeft:15,
        fontFamily: fontsName.BLACK,
    },
    quoteContainer: {
        marginHorizontal:40,
        marginTop:30,
        marginBottom:16,
        
    },
    quote: {
        fontSize: 24,
        color: constants.COLORS.BROWN,
        fontFamily: fontsName.BOLD,
    },
    text: {
        fontSize: 22,
        color: constants.COLORS.SECONDARY_YELLOW,
        paddingTop: 38,
        fontFamily: fontsName.BOLD,
    }, 
    carrousel: {
        marginTop:20,
    },
    choose: {
        alignItems: "center",
    },
    logoContainer: {
        alignItems: "center"
    },
    logoText: {
        fontSize: 12,
        color: constants.COLORS.BROWN,
        fontFamily: fontsName.BOLD,
    }
});