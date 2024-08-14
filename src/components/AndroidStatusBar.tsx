import { StyleSheet, View } from 'react-native';
import { Time } from './Time'

export function AndroidStatusBar() {
  return (
    <View style={styles.container}>
      <Time style={styles.time} />
      <View style={styles.wifiDataBattery}>
        <View style={styles.wifi} />
        <View style={styles.data} />
        <View>
          <View style={styles.battery} />
          <View style={{position: 'absolute', width: 3, height: 3, backgroundColor: 'white', top: 0, left: 2}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  time: {
    color: '#fff'
  },

  wifiDataBattery: {
    flexDirection: 'row'
  },

  wifi: {
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftColor: 'transparent',
      borderLeftWidth: 13,
      borderRightColor: 'transparent',
      borderRightWidth: 13,
      borderTopWidth: 15,
      borderTopColor: 'white',
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      borderBottomLeftRadius: "50%",
  },

  data: {
    height: 0,
    width: 0,
    borderBottomWidth: 15,
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
    borderLeftWidth: 15,
    marginEnd: 7.5
  },

  battery: {
    marginTop: 2,
    height: 13,
    width: 7.5,
    backgroundColor: 'white'
  }
});
