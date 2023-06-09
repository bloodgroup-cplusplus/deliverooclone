import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
    <View style={styles.container}>
      <Text className="text-red-500">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </Stack.Navigator>
    </TailwindProvider>
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
