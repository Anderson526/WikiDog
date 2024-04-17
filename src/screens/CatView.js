import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import CatCardComponent from "../components/CatCard";

const CatView = () =>{
    return(
        <ScrollView>
            <Text style={styles.textoBienvenida}>Pantalla de gaticos</Text>
            <CatCardComponent/>
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

  export default CatView;

