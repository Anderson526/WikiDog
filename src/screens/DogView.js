import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import DogCardComponent from "../components/DogCard";

const DogView = () =>{
    return(
        <ScrollView>
            <Text style={styles.textoBienvenida}>Pantalla de perritos</Text>
        <DogCardComponent/>
        </ScrollView>

    );
}

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

export default DogView;
  
 
