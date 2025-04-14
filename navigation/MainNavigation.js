import * as React from 'react';
import { createStaticNavigation , NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import WebViewScreen from '../screen/WebViewScreen';

const HomeStack = createNativeStackNavigator();

//Se crea la navegación y declaración de las rutas con header dinámico
export default function HomeScreenStack(){
    return (
        <HomeStack.Navigator initialRouteName="Home"
        screenOptions={({
            headerStyle:{
                backgroundColor: "#14284a"
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
        })}
        >
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='WebViewSites' component={WebViewScreen} options={({route}) => ({title: route.params.name})}/>
        </HomeStack.Navigator>
    )
}