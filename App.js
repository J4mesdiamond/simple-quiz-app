import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';


export default function App() {
  return (
    <View style={styles.container}>
        <MyStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
