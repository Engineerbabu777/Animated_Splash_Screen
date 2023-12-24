import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationScreen from './components/animationScreen';
import { NavigationContainer } from "@react-navigation/native";
import NextScreen from './components/NextScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={AnimationScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Next" component={NextScreen} options={{headerShown:false}}/>

    {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    {/* <Stack.Screen name="Profile" component={Profile} /> */}
    {/* <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
