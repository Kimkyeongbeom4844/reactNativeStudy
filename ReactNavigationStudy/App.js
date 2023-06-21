import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({size, color}) => (
              <MaterialCommunityIcons
                name="home-alert"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen name="Details" component={DetailScreen} options={{}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
