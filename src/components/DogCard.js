import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import dogCard from '../assets/DogInformation.json';

const DogCardComponent = () =>{
return(
    <View style={styles.container}>
        {dogCard.map((breed,index)=>(
            <View key={index} style={styles.breedContainer}>
               
                <Text>{breed.name}</Text>
                <Text>Tamaño del perro: {breed.size}</Text>
                <Text>Esperanza de vida: {breed.life_span}</Text>
                <Image
                    source={breed.url_img}
                    style={{ width: 200, height: 200 }}
                />

            </View>
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
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },


})

export default DogCardComponent;