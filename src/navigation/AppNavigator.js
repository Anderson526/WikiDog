import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import DogView from "../screens/DogView";
import CatView from "../screens/CatView";
import SplashScreen from "../screens/SplashScreen";

import CompleteDetailsDog from "../components/CompleteDetailsDog";
import CompleteDetailsCat from "../components/CompleteDetailsCat";

const Stack = createStackNavigator();   
const Tab = createBottomTabNavigator();

const PetTabs = () =>{

        return(
       
                <Tab.Navigator
                    screenOptions={({route}) =>({

                        tabBarActiveTintColor: 'purple',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: {
                          display: 'flex'
                        },

                        tabBarIcon: ({focused, size })=> {
                        let iconName;
                        
                        if(route.name === 'Perritos'){
                            iconName = focused ? require('../assets/icons/IconDog.png') : require('../assets/icons/IconDog.png');
                        }else if (route.name === 'Gaticos'){
                            iconName = focused ? require('../assets/icons/IconCat.png') : require('../assets/icons/IconCat.png');
                        }
                        return <Image source={iconName} style={{ width: size, height: size }} />;
                    },
                  })}
             
                >
                    <Tab.Screen name="Perritos" component={DogView} options={{ headerShown: false }} />
                    <Tab.Screen name="Gaticos" component={CatView} options={{ headerShown: false }} />
                   
                </Tab.Navigator>
         

        );


}


const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PetTabs" component={PetTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="CompleteDetailsDog"
          component={CompleteDetailsDog}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CompleteDetailsCat"
          component={CompleteDetailsCat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default AppNavigator;
  
