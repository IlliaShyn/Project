import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/Details';
import { View, Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
              />
              <Button
                title="Details"
                onPress={() => navigation.navigate('Details')}
              />
            </View>
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomePage} options={{ 
    title: 'Home', 
    headerStyle: {
      backgroundColor: '#6200EE', // Different color for Home screen
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'left', // Align title to the left
  }} 
/>
        <Stack.Screen name="Details" component={DetailsPage} options={{ 
    title: 'Details', 
    headerStyle: {
      backgroundColor: '#009688', // Different color for Details screen
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'right', // Align title to the right
  }} 
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



