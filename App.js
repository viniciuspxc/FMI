import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {Start} from "./screens"
import {SignUp} from "./screens"
import {Home} from "./screens"
import {AddProfile} from "./screens"
import {Configs} from "./screens"
import {Entries} from "./screens"
import {Goals} from "./screens"
import {Reports} from "./screens"
import {ProfileTransfer} from "./screens"
import {AddSharedProfile} from "./screens"
import {EditProfile} from "./screens"
import {AddGoals} from "./screens"


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Start'}
        >
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProfile" component={AddProfile} />
            <Stack.Screen name="Configs" component={Configs} />
            <Stack.Screen name="Entries" component={Entries} />
            <Stack.Screen name="Goals" component={Goals} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="ProfileTransfer" component={ProfileTransfer} />
            <Stack.Screen name="AddSharedProfile" component={AddSharedProfile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="AddGoals" component={AddGoals} />
            </Stack.Navigator>
    </NavigationContainer>
)
}


export default App;