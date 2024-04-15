//importacion de librerias para la vista
import React ,{useEffect}  from "react";
import { View, Text, StyleSheet } from "react-native";


const SplashScreen = ({navigation}) => {



useEffect(()=>{
setTimeout(() => {
    navigation.navigate('DogView');
},1000);

return () => clearTimeout(timer);

},[navigation]);

 
    return(
        <View style={styles.container}>
            <Text style={styles.textoBienvenida}>¡Bienvenido.!</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'

    },
    textoBienvenida:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#000000',
    },
});

export default SplashScreen;