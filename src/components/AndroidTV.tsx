import { StyleSheet, Text, View } from 'react-native';
import { LauncherApp } from './LauncherApp';

export function AndroidTV() {
	return (
		<View style={styles.container}>
			<View style={{paddingBottom: 5, paddingStart: 20}}><Text style={{fontSize: 20, color: 'white'}}>Your apps</Text></View>
			<View style={styles.menu}>
				<LauncherApp name='Mo Channel' iconShape='circle' url='https://github.com/giovanischiar/mo-channel' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 250,
    backgroundColor: '#181c1f',
    flexDirection: 'column',
    paddingStart: 15,
    paddingTop: 40,
    borderStyle: 'inset',
    borderWidth: 10
  },

  menu: {
  	flexDirection: 'row'
  }
});
