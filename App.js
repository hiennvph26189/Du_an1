import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManChao from './src/Screen/ManChao';
import Login from './src/Screen/Login';
import NewAccount from './src/Screen/NewAccount';
import Home from './src/Screen/Home';
import { Provider} from 'react-redux';
import {store} from "./src/redux/store";
export default function App() {
 
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='ManChao' component={ManChao}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name='NewAccount' component={NewAccount}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name='Home' component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
