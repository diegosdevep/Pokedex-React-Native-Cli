import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokemonScreen from '../screens/PokemonScreen';
import HomeScreen from '../screens/HomeScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: {simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>()

const Tab1 = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'white'
            }
        }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='PokemonScreen' component={PokemonScreen}/>
    </Stack.Navigator>
  )
}

export default Tab1