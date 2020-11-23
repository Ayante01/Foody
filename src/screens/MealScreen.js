import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import axios from '../utils/axios';
import constants from '../utils/constants';
import { Foundation } from '@expo/vector-icons';  
import { ScrollView } from 'react-native-gesture-handler';
import { fontsName } from '../utils/fonts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');

const imageWidth = width;
const imageHeight = (height / 2) + 30;


export const  MealScreen = ({navigation, route}) => {

    const {recipe} = route.params;
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
        .get(`lookup.php?i=${recipe.idMeal}`)
        .then((res) => {
            setMeals(res.data.meals);
        })
        .catch((err) => {console.log(err)});
    }, [setMeals]);

    useEffect(() => {
		navigation.setOptions({
			headerLeft: (props) => {
				return (
					<View style={styles.containerButtonIcon}>
						<MaterialCommunityIcons
							name="keyboard-backspace"
							size={24}
							color={constants.COLORS.BROWN}
							{...props}
						/>
					</View>
				);
            },
		});
    });

    return (

        <ScrollView style={styles.container} >
             <SafeAreaView>
            {
                meals.map( meal =>{
                    
                    return(
                        <View  key={meal.idMeal} style={styles.container}>
                        
                                <View style={styles.imgContainer}>
                                    
                                    <Image style={styles.img}
                                        source={{
                                            uri: meal.strMealThumb}}
                                            blurRadius={3}>
                                    </Image>
                                    <View style={styles.topContainer}>
                                        <View style={styles.topCategory}>
                                            <Text style={styles.topText}>{meal.strCategory}</Text>
                                        </View>
                                        <View style={styles.topArea}>
                                            <Text style={styles.topText}>{meal.strArea}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.tittle} numberOfLines={3}>{meal.strMeal}</Text>
                                </View>
                                <View style={styles.cardContainer}>
                                    <View style={styles.information}> 
                                        <View style={styles.containerSubtitle}>
                                                <Foundation name="list-bullet" size={30} color={constants.COLORS.BROWN} />
                                                <Text style={styles.subtitle}>Ingredients</Text>                
                                        </View>
                                        <Text style={styles.ingredients}></Text>
                                        <View style={styles.ingredientsContainer}>
                                            <View style={styles.rowOne}>
                                                <Text style={styles.ingredient}>{meal.strIngredient1 ?  meal.strIngredient1 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient2 ?  meal.strIngredient2 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient3 ?  meal.strIngredient3 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient4 ?  meal.strIngredient4 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient5 ?  meal.strIngredient5 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient6 ?  meal.strIngredient6 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient7 ?  meal.strIngredient7 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient8 ?  meal.strIngredient8 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient9 ?  meal.strIngredient9 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient10 ?  meal.strIngredient10 : ''}</Text>
                                            </View>
                                            <View style={styles.rowTwo}>
                                                <Text style={styles.ingredient}>{meal.strIngredient11 ?  meal.strIngredient11 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient12 ?  meal.strIngredient12 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient13 ?  meal.strIngredient13 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient14 ?  meal.strIngredient14 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient15 ?  meal.strIngredient15 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient16 ?  meal.strIngredient16 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient17 ?  meal.strIngredient17 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient18 ?  meal.strIngredient18 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient19 ?  meal.strIngredient19 : ''}</Text>
                                                <Text style={styles.ingredient}>{meal.strIngredient20 ?  meal.strIngredient20 : ''}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.containerSubtitle}>
                                                <Foundation name="list-bullet" size={30} color={constants.COLORS.BROWN} />
                                                <Text style={styles.subtitle}>Instructions</Text>                
                                        </View>
                                        <View>
                                            <Text style={styles.textIngredients}>{meal.strInstructions}</Text>
                                        </View>
                                    </View>
                                </View>               
                           
                        </View>
                        
                    );
                })
            }
             </SafeAreaView>
        </ScrollView>
   
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: constants.COLORS.SECONDARY_BROWN,
    },
    topContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 8,
        paddingRight: 16
      
    },
    topCategory: {
        width: 120,
        height: 40,
        borderRadius: 20,
        backgroundColor: constants.COLORS.PRIMARY_YELLOW,
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    topArea: {
        width: 120,
        height: 40,
        borderRadius: 20,
        backgroundColor: constants.COLORS.PRIMARY_YELLOW,
        justifyContent: "center",
        alignItems: "center"
    },
    topText:{
        color: constants.COLORS.WHITE,
        fontSize:16,
        fontFamily: fontsName.REGULAR,fontFamily: fontsName.REGULAR,
    },
    imgContainer: {
        position: 'absolute'
    },
    img: {
        width: "100%",
        height: imageHeight,
        position: 'absolute'
    },
    cardContainer:{
        top: 280,
        marginHorizontal: 20,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: constants.COLORS.WHITE,
        width: '90%',
        position: 'relative'
    },
    information: {
        marginHorizontal: 30,
        marginVertical: 40
    },
    tittle: {
        fontSize: 40,
        color: constants.COLORS.CARD,
        marginHorizontal:20,
        top: 40,
        textShadowOffset: { width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 15,
        fontFamily: fontsName.BOLD,
        position: 'relative',
        padding: 20,
    },
    containerSubtitle: {
        flexDirection:"row",
        alignItems: "center",
    },
    subtitle:{
        fontSize: 20,
        color: constants.COLORS.BROWN,
        marginLeft: 10,
        fontFamily: fontsName.BOLD,
    },
    ingredientsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:20,
    },
    ingredient: {
        fontSize: 16,
        color: constants.COLORS.BROWN,
        fontFamily: fontsName.REGULAR,
        marginBottom:4
    },
    textIngredients: {
        fontSize: 16,
        color: constants.COLORS.BROWN,
        marginTop: 20,
        marginBottom: 400,
        lineHeight: 25
    },
    containerButtonIcon: {
		backgroundColor: constants.COLORS.PRIMARY_YELLOW,
		borderRadius: 20,
		width: 36,
		height: 36,
		marginHorizontal: 20,
		justifyContent: 'center',
        alignItems: 'center',
        position :"absolute"
	},

});

