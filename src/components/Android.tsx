import { StyleSheet, Text, View } from 'react-native';
import { LauncherApp } from './LauncherApp';
import { AndroidStatusBar } from './AndroidStatusBar';

export function Android() {
	return (
		<View style={styles.container}>
			<AndroidStatusBar/>
			<View style={{height: 30, width: 30, backgroundColor: 'black', position: 'absolute', start: 135, top: 8, borderRadius: 15}} />
			<View style={styles.menu}>
				<LauncherApp name='Fridgnet' iconShape='circle' url='https://github.com/giovanischiar/fridgnet' />
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  menu: {
  	flexDirection: 'row'
  }
});
