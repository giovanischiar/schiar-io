import { StyleSheet, Text, View } from 'react-native';
import { Time } from './Time';
import { IOSWifi } from './IOSWifi';
import { IOSBattery } from './IOSBattery'; 

export function IOSStatusBar() {
  return (
    <View style={styles.container}>
      <Time style={styles.time} />
      <View style={styles.wifiDataBattery}>
        <View style={{flexDirection: 'row', gap: 3, width: 20, marginEnd: 5, marginBottom: 2, alignItems: 'flex-end'}}>
          <View style={{width: 2, backgroundColor: 'white', height: 3}} />
          <View style={{width: 2, backgroundColor: 'white', height: 6}} />
          <View style={{width: 2, backgroundColor: 'white', height: 9}} />
          <View style={{width: 2, backgroundColor: 'white', height: 12}} />
        </View>
        <IOSWifi style={styles.wifi} />
        <View style={{justifyContent: 'center'}}>
          <IOSBattery style={styles.battery} />
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
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  time: {
    color: '#fff',
    marginStart: 20
  },

  wifiDataBattery: {
    flexDirection: 'row'
  },

  wifi: {
    width: 20,
    height: 20,
    color: 'white',
    marginEnd: 5
  },

  wifiCone: {
    position: 'absolute', 
    top: 15,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderTopColor: 'white',
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%",
  },

  data: {
    height: 0,
    width: 0,
    borderBottomWidth: 20,
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
    borderLeftWidth: 20,
    marginEnd: 10
  },

  battery: {
    width: 20,
  }
});
