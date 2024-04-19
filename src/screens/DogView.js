import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import DogCardComponent from "../components/DogCard";

const DogView = () =>{
    return(
        <ScrollView>
            <Text style={styles.textoBienvenida}>Lista De Perritos</Text>
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
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
        color:'red',
        fontSize: 34,
        color:'red',
        fontWeight:'bold',
      
    },
  });

export default DogView;
  
 
