import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet, Animated, SafeAreaView } from 'react-native';
import axios from '../utils/axios';
import constants from '../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
import Recipe from '../components/Recipe';
import { fontsName } from '../utils/fonts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const  CategoryScreen  = ({navigation, route}) => {

    const {category} = route.params;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
        .get(`filter.php?c=${category.strCategory}`)
        .then((res) => {
            setRecipes(res.data.meals);
            
        })
        .catch((err) => {console.log(err)});
    }, [setRecipes]);

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
    
    const HEADER_EXPANDED_HEIGHT = 300;
    const HEADER_COLLAPSED_HEIGHT = 60;

        let state = {
        scrollY: new Animated.Value(0)
        
    };

        const headerHeight = state.scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
        });

    return (
            <ScrollView style={styles.container}>
                <SafeAreaView>
            <View  style={styles.header}>
                <View>
                    <Text style={styles.title}>Category</Text>
                    <Text style={styles.categoryName}>{category.strCategory}</Text>
                </View>
                <View style={styles.shape}>
                </View>
            </View>
            <View >
                <View style={styles.list}
                    >{recipes.map( recipe =>{
                        return(
                            <Recipe key={recipe.idMeal} recipe={recipe} navigation={navigation}/>
                        );
                    })}
                </View>
      
                </View>
                </SafeAreaView>
        </ScrollView>  
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: constants.COLORS.WHITE,
    },
    header: {
        flexDirection: "row",
        marginTop:48,
        marginBottom:8,
        justifyContent: "space-between",
        alignItems: "center"
    },
    shape: {
    width: 80,
    height:45,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: constants.COLORS.SECONDARY_YELLOW
    },
    title: {
        color: constants.COLORS.BROWN,
        fontSize: 14,
        marginLeft:26,
        fontFamily: fontsName.REGULAR,
        marginVertical: 8
    },
    categoryName: {
        color: constants.COLORS.BROWN,
        fontSize: 40,
        marginBottom: 20,
        marginHorizontal:26,
        fontFamily: fontsName.BLACK
    },
    list: {
     flexDirection: 'row',
     flexWrap: "wrap",
     justifyContent: "space-between",
     marginHorizontal: 10
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

