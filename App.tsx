import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { Android } from './src/components/Android';
import { WearOS } from './src/components/WearOS';
import { AndroidTV } from './src/components/AndroidTV';
import { IOS } from './src/components/IOS';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <ScrollView>
    <View style={{flex: 1, padding: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 30, paddingHorizontal: 20}}>
      <Android/>
      <WearOS/>
      <AndroidTV/>
      <IOS/>
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <View style={{flex: 1, padding: 30}}>
    <Text style={{fontSize: 20}}>Mobile Developer with 7+ years of native Android development and 4 years in hybrid app development using React Native. I’ve built and published diverse mobile applications across Android, iOS, Android TV, and Wear OS, leading projects like Comb, a cashback app, from concept to deployment. My GitHub (github.com/giovanischiar) reflects my commitment to innovative solutions, continuous learning, and user-centric design. Proficient in Kotlin, Jetpack Compose, and React Native, I’m eager to contribute my skills to impactful mobile projects.</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Apps' },
    { key: 'second', title: 'About' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#3c78d8ff' }}
    />
  );

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', height: 200, backgroundColor: "#3c78d8ff", alignSelf: 'stretch', alignItems: 'flex-end', paddingStart: 20, paddingBottom: 20}}>
        <Text style={{fontSize: 72, color: 'white'}}>schiar.io</Text>
      </View>
    <TabView
      renderTabBar={renderTabBar}
      style={{flex: 1}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column'
  },
});
