import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Profile from '../screens/profile';
import Home from '../screens/home';
import Results from '../screens/results';
import { BottomTabParamList, ProfileParams, HomeParams, ResultsParams } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Me"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Me"
        component={me}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Results"
        component={results}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const myProfileStack = createStackNavigator<ProfileParams>();

function me() {
  return (
    <myProfileStack.Navigator>
      <myProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'WAGER' }}
      />
    </myProfileStack.Navigator>
  );
}

const homeStack = createStackNavigator<HomeParams>();

function home() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'WAGER' }}
      />
    </homeStack.Navigator>
  );
}
const resultsStack = createStackNavigator<ResultsParams>();

function results() {
  return (
    <resultsStack.Navigator>
      <resultsStack.Screen
        name="Results"
        component={Results}
        options={{ headerTitle: 'WAGER' }}
      />
    </resultsStack.Navigator>
  );
}
