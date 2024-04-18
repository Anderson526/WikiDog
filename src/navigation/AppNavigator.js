import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import DogView from "../screens/DogView";
import CatView from "../screens/CatView";



const Tab = createBottomTabNavigator();

const AppNavigator = () =>{

        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) =>({
                        tabBarIcon: ({focused, size})=> {
                        let iconName;
                        
                        if(route.name === 'Perritos'){
                            iconName = focused ? require('../assets/icons/IconDog.png') : require('../assets/icons/IconDog.png');
                        }else if (route.name === 'Gaticos'){
                            iconName = focused ? require('../assets/icons/IconCat.png') : require('../assets/icons/IconCat.png');
                        }

                        return <Image  source={iconName} style ={{width: size , height: size}}/>;
                    },
                })}
                tabBarOptions ={{
                    activeTintColor : 'purple',
                    InactiveTintColor : 'gray',

                }}
                >
                    <Tab.Screen name="Perritos" component={DogView} options={{ headerShown: false }} />
                    <Tab.Screen name="Gaticos" component={CatView} options={{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>

        );


}

export default AppNavigator;