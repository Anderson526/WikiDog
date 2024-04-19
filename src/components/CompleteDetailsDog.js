import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DogDetailsScreen = ({ route }) => {
  const { breed } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.breedContainer}>
        <Text style={styles.text}>Nombre: {breed.name}</Text>
        <Text style={styles.text}>Tamaño del perro: {breed.size}</Text>
        <Text style={styles.text}>Esperanza de vida: {breed.life_span}</Text>
        <Image
          source={{ uri: breed.url_img }}
          style={{ width: 200, height: 200 }}
        />
      
      </View>
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
  text: {
    color: '#000000'
  }
});

export default DogDetailsScreen;
