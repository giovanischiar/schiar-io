import { StyleSheet, Text, View } from 'react-native';
import { WearOSApp } from './WearOSApp';

export function WearOS() {
	return (
		<View style={styles.container}>
			<Text style={{alignSelf: 'center', padding: 30, fontSize: 20, color: 'white'}}>Apps</Text>
			<View style={styles.menu}>
				<WearOSApp name="Rule of 3" url='https://github.com/giovanischiar/rule-of-three-wearos' />
				<WearOSApp name="Pokechart" url='https://github.com/giovanischiar/pokechart' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: '#181c1f',
    flexDirection: 'column',
    borderRadius: 300,
    alignItems: 'center'
  },

  menu: {
  	flexDirection: 'column',
  	gap: 5
  }
});
