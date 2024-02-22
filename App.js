import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigators } from './src/navigators/RootNavigators';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <RootNavigators/>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </SafeAreaProvider>
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