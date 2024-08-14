import { useState, ReactNode } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Linking } from 'react-native';

export function LauncherApp(props: {
    name: String, 
    iconShape: 'circle' | 'round-corners', 
    url: String
  }
) {
  const { container, icon } = styles(props.iconShape)
  var iconImage = require("../../assets/app-icons/fridgnet.png")
  if (props.name == 'Bluversation') {
    iconImage = require("../../assets/app-icons/bluversation.png")
  } else if (props.name == 'Mo Channel') {
    iconImage = require("../../assets/app-icons/mo-channel.png")
  }

  return (
    <Pressable style={container} onPress={() => { Linking.openURL(props.url.toString()) }}>
      <View style={icon}><Image style={{width: 95, height: 95 }} source={iconImage} /></View>
      <Text style={{color: 'white'}}>{props.name}</Text>
    </Pressable>
  );
}

const styles = (iconShape: String) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
    width: 85
  },

  icon: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    alignItems:  'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: iconShape == 'circle' ? 50 : 20 
  }
});
