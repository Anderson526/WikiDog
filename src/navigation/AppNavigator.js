import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import DogView from "../screens/DogView";
import CatView from "../screens/CatView";


const Tab = createBottomTabNavigator();

const AppNavigator = () =>{

        return(
            <NavigationContainer>
                <Tab.Navigator
                      screenOptions={({ route }) => ({
                        tabBarVisible: route.name !== 'DogView', // Oculta Screen2
                      })}
                >
                    <Tab.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, tabBarStyle:{display: 'none'}, tabBarVisible: false }} />
                    <Tab.Screen name="DogView" component={DogView} options={{ headerShown: false }} />
                    <Tab.Screen name="CatView" component={CatView} options={{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>

        );


}

export default AppNavigator;