import { StyleSheet, Text, View } from 'react-native';
import { LauncherApp } from './LauncherApp';
import { IOSStatusBar } from './IOSStatusBar';

export function IOS() {
	return (
		<View style={styles.container}>
			<IOSStatusBar/>
			<View style={{height: 30, width: 100, backgroundColor: 'black', position: 'absolute', start: 100, top: 10, borderRadius: 15}} />
			<View style={styles.menu}>
				<LauncherApp name='Bluversation' iconShape='round-corners' url='https://github.com/giovanischiar/bluversation-ios' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    minHeight: 400,
    backgroundColor: '#181c1f',
    flexDirection: 'column',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  menu: {
  	flexDirection: 'row'
  }
});
