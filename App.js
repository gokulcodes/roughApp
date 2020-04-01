import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import Home from './src/screens/HomeScreen'
import OrderScreen from './src/screens/OrderScreen'
import About from './src/screens/About'
import Camera  from './src/screens/Camera'

export default function App() {
  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()
  const Tab = createBottomTabNavigator()
  const MaterialTab = createMaterialBottomTabNavigator()
  return (
    <NavigationContainer>
      <MaterialTab.Navigator barStyle={{ backgroundColor: '#000' }}>
        <MaterialTab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <MaterialTab.Screen 
          name="OrderScreen" 
          component={OrderScreen} 
          options={{
            tabBarLabel: 'Goals',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }} />
        <MaterialTab.Screen 
          name="About" 
          component={About} 
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="flash" color={color} size={26} />
          ),
        }}  
        />
        <MaterialTab.Screen 
          name="Camera" 
          component={Camera} 
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}  
        />
      </MaterialTab.Navigator>
      {/* <Drawer.Navigator initialRouteName="OrderScreen">
        <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home' }}/>
        <Drawer.Screen name="Orders" component={OrderScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}


