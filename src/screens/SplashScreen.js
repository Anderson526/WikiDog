//importacion de librerias para la vista
import React ,{useEffect}  from "react";
import { View, Text, StyleSheet,Image } from "react-native";


const SplashScreen = ({navigation}) => {



useEffect(()=>{
const timer= setTimeout(() => {
    navigation.navigate('PetTabs');
},2000);

return () => clearTimeout(timer);

},[navigation]);

 
    return(
        <View style={styles.container}>
            <Text style={styles.textoBienvenida}>¡Bienvenido a una Wiki de ternura.!</Text>
            <Image
            source={require('../assets/icons/IconSplashScreen.png')}
            />
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