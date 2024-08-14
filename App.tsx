import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Android } from './src/components/Android';
import { WearOS } from './src/components/WearOS';
import { AndroidTV } from './src/components/AndroidTV';
import { IOS } from './src/components/IOS';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row', height: 200, backgroundColor: "#3c78d8ff", alignSelf: 'stretch', marginBottom: 30, alignItems: 'flex-end', paddingStart: 20, paddingBottom: 20}}>
        <Text style={{fontSize: 72, color: 'white'}}>schiar.io</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 30, paddingHorizontal: 20}}>
        <Android/>
        <WearOS/>
        <AndroidTV/>
        <IOS/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column'
  },
});
