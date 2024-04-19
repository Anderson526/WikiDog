import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DogDetailsScreen = ({ route }) => {
  const { breed } = route.params;

  return (
    <ScrollView>
      <View>
      <Image
          source={{ uri: breed.url_img }}
          style={styles.DogImages}
        />
      </View>
      <View style={styles.breedContainer}>
        <Text style={styles.textHeader}>{breed.name}</Text>
        <Text style={styles.textSubInfo}>Tamaño del perro: {breed.size}</Text>
        <Text style={styles.textSubInfo}>Esperanza de vida: {breed.life_span}</Text>
        <Text style={{marginBottom:10,marginTop:10,fontSize:20,color:'red' }}>Descripción</Text>
        <Text style={styles.textSubInfo}>{breed.description}</Text>

      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  breedContainer: {
    marginLeft:30,
    marginRight:30,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  textHeader: {
 
    fontSize:46,
    fontWeight: 'bold',
    color : 'red'
  },
  textSubInfo:{
    fontSize:16,
    color: '#000000',
  },
  DogImages:{
    width: 400,
    height: 380,
    marginBottom: 20

  }
});

export default DogDetailsScreen;
