import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import CatCardComponent from "../components/CatCard";

const CatView = () =>{
    return(
        <ScrollView>
            <Text style={styles.textoBienvenida}>Lista De Gaticos</Text>
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
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
        color:'purple',
        fontSize: 34,
        fontWeight:'bold',
       
    },
  });

  export default CatView;

