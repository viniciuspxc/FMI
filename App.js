import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {
    Start,
    SignUp,
    Home,
    Configs,
    Entries,
    Goals,
    Reports,
    EditProfile,
    AddGoals
} from "./screens"

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
              <Stack.Screen name="Configs" component={Configs} />
              <Stack.Screen name="Entries" component={Entries} />
              <Stack.Screen name="Goals" component={Goals} />
              <Stack.Screen name="Reports" component={Reports} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="AddGoals" component={AddGoals} />
        </Stack.Navigator>
    </NavigationContainer>
)
}


export default App;
