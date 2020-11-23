import React from 'react'
import { View, Text, Pressable,StyleSheet, Image } from 'react-native'
import constants from '../utils/constants';
import { fontsName } from '../utils/fonts';

const Category = ({category, navigation}) => {
    
    const {strCategory, strCategoryThumb} = category;

    const loadCategory = () => {
        navigation.navigate(constants.SCREEN.CATEGORY, { category });
    };

    return (
        <View>
            <Pressable onPress={ loadCategory } style={styles.container}>
                <Image  style={styles.img}
                source={{
                    uri: strCategoryThumb,
                }}></Image>
                <Text style={styles.text}>{strCategory}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: constants.COLORS.CARD,
        width:190,
        height:250,
        justifyContent: "space-evenly",
        flexDirection:"column",
        alignItems:"center",
        margin:20,
        borderRadius:30,
        shadowColor: constants.COLORS.BROWN,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,

        elevation: 10,
    },
    img: {
        width: 140,
        height: 90,
    },
    text: {
        fontSize: 18,
        color: constants.COLORS.BROWN,
        fontFamily: fontsName.BOLD,
    }
});

export default Category;
