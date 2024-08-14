import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';

export function WearOSApp(props: {name: String, url: String}) {
  var iconImage = require("../../assets/app-icons/rule-of-3.png")
  if (props.name == 'Pokechart') {
    iconImage = require("../../assets/app-icons/pokechart.png")
  }

  return (
    <Pressable style={styles.container} onPress={() => { Linking.openURL(props.url.toString()) }}>
      <View style={styles.icon}><Image style={{width: 40, height: 40}} source={iconImage} /></View>
      <Text style={{color: 'white'}}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    width: 250,
    backgroundColor: "#555",
    borderRadius: 50
  },

  icon: {
  	width: 30,
    height: 30,
    alignItems:  'center',
    justifyContent: 'center',
    marginRight: 15,
    overflow: 'hidden',
    borderRadius: 25
  }
});
