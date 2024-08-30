import { Text, Image, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import { useWindowDimensions } from './WindowDimensions';

export function PortifolioApp(props: {name: String, url: String, onPress: () => {}}) {
  let padding = 15
  var screenWidth = useWindowDimensions().width
  var iconSize = (screenWidth - (padding * 4) - (screenWidth > 768 ? 320 : 0))/3

  const { container, icon } = styles(padding, iconSize)
  var iconImage = require("../../assets/app-icons/fridgnet.png")
  var { name, url, onPress } = props
  switch (name) {
    case 'Bluversation': {
      iconImage = require("../../assets/app-icons/bluversation.png")
      break;
    }

    case 'Mo Channel': {
      iconImage = require("../../assets/app-icons/mo-channel.png")
      break;
    }

    case 'Rule of 3': {
      iconImage = require("../../assets/app-icons/rule-of-3.png")
      break;
    }

    case 'Pokechart': {
      iconImage = require("../../assets/app-icons/pokechart.png")
      break;
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Image style={icon} source={iconImage}/>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}


const styles = (padding: DimensionValue, iconSize: DimensionValue) => StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  icon: {
    width: iconSize,
    height: iconSize,
    maxWidth: 150,
    maxHeight: 150,
    marginBottom: padding
  }
})