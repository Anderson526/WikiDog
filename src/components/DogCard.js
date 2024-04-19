import React from "react";
import {View,Text,StyleSheet,Image, TouchableOpacity} from "react-native";
import dogCard from '../assets/DogInformation.json';
import { useNavigation } from "@react-navigation/native";


const DogCardComponent = () =>{
  const navigation  = useNavigation();
  const handleCardPress = (breed) => {
    navigation.navigate('CompleteDetailsDog', { breed });
  };


return(

    <View style={styles.container}>
        {dogCard.map((breed,index)=>(
            <TouchableOpacity key={index} onPress={() => handleCardPress(breed)}>
            <View  style={styles.breedContainer}>
              
                <Text style={styles.text}>{breed.name}</Text>
             
                <Image
                source={{
                uri: breed.url_img, 
                }}
                style={{ width: 300, height: 200 }}
                />

            </View>
            </TouchableOpacity>
        ))}


    </View>
);

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      breedContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#dae2f0',
        borderRadius: 5,
      },
      text: {
        color: '#000000',
        fontSize: 24,
      }


})

export default DogCardComponent;