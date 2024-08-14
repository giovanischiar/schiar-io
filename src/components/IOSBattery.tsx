import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from "react-native-svg"

export function IOSBattery(props: { style: StyleProp<ViewStyle> }) {
  return (
    <Svg
      style={props.style}
      viewBox="0 0 1024 1024"
      fill="white"
    >
      <Path d="M792 288H128c-52.8 0-96 43.2-96 96v256c0 52.8 43.2 96 96 96h664c52.8 0 96-43.2 96-96V384c0-52.8-43.2-96-96-96zm40 352c0 22-18 40-40 40H128c-22 0-40-18-40-40V384c0-22 18-40 40-40h664c22 0 40 18 40 40v256zm96-230.8v205.6c32 0 64-55.4 64-102.8s-32-102.8-64-102.8z" />
      <Path d="M768 384H152c-13.2 0-24 10.8-24 24v208c0 13.2 10.8 24 24 24h616c13.2 0 24-10.8 24-24V408c0-13.2-10.8-24-24-24z" />
    </Svg>
  )
}

