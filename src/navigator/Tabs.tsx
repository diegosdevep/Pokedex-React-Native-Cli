import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import Tab1 from './Tab1';

const Tab = createBottomTabNavigator();




const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#5856D5',
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.82)', 
                paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
                borderWidth: 0,
                elevation: 0,
                height: 60,//( Platform.OS === 'ios') ? 70 : 80,
            }
        }}
    >
        <Tab.Screen 
            name="Navigator" 
            component={Tab1} 
            options={{
                tabBarLabel:'Listado',
                tabBarIcon:({color}) => (
                    <Icon 
                        color={color} 
                        size={30} 
                        name='list-outline'
                    />)
            }}
        />
        <Tab.Screen
            name="Tab2Screen" 
            component={Tab2Screen} 
            options={{
                tabBarLabel:'Listado',
                tabBarIcon:({color}) => (
                    <Icon 
                        color={color} 
                        size={30} 
                        name='search-outline'
                    />)
            }}
        />
    </Tab.Navigator>
  )
}

export default Tabs