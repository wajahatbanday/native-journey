import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen/ProfileScreen';
import {AuthProvider, useAuth} from './context/AuthContext';
import {LoginScreen} from './screens/LoginScreen';
import {NavBarIcon} from './components/NavBarIcon';
import {SearchScreen} from './screens/SearchScreen';
import {DiscoverScreen} from './screens/DiscoverScreen';
import {ProductScreen} from './screens/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

function DiscoverStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const getTabBarIcon =
  (name: string) =>
  ({focused}: {focused: boolean}) =>
    <NavBarIcon name={name} focused={focused} />;

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f9a602',
          height: 100,
          borderBlockColor: '#f9a602',
        },
        tabBarLabelStyle: {
          fontSize: 18,
          color: '#fff',
        },
        tabBarIcon: getTabBarIcon(route.name),
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Discover" component={DiscoverStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
