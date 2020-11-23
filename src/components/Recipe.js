import React from 'react'
import { View,Text, Pressable,StyleSheet, Image } from 'react-native'
import constants from '../utils/constants';
import { fontsName } from '../utils/fonts';



const Recipe = ({recipe, navigation}) => {
    const {strMeal, strMealThumb} = recipe;

    const loadRecipe = () => {
        navigation.navigate(constants.SCREEN.MEAL, { recipe });
    };

    return (
        <View>
            <Pressable onPress={ loadRecipe } style={styles.container}>
                <Image  style={styles.img}
                source={{
                    uri: strMealThumb,
                }}></Image>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.text}>{strMeal}</Text>
                </View>
                
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: constants.COLORS.CARD,
        width:150,
        height:200,
        justifyContent: "flex-start",
        flexDirection:"column",
        alignItems:"center",
        margin:10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 11.14,

        elevation: 17,
    },
    img: {
        marginTop: 0,
        width: 150,
        height: 150,

    },
    textContainer: {
        width: '100%',
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "center",
        
    },
    text: {
        fontSize: 14,
        color: constants.COLORS.BROWN,
        fontFamily: fontsName.REGULAR,
        marginHorizontal:8
    }
});

export default Recipe;
