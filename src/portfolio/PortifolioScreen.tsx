import { ScrollView, View } from 'react-native';
import { Android } from '../components/Android';
import { WearOS } from '../components/WearOS';
import { AndroidTV } from '../components/AndroidTV';
import { IOS } from '../components/IOS';
import { PortifolioApp } from '../components/PortifolioApp' 

export function PortifolioScreen(props: {navigation: any}) {
	let { navigation } = props
	return (
	  <ScrollView>
	    <View style={{flex: 1, padding: 15, flexDirection: 'row', flexWrap: 'wrap', gap: 15, paddingHorizontal: 15}}>
	    	<PortifolioApp 
	    		name="Fridgnet" 
	    		url="https://github.com/giovanischiar/fridgnet"
	    		onPress={() => navigation.navigate("Fridgnet")}
	    	/>
	    	<PortifolioApp 
	    		name="Rule of 3" 
	    		url="https://github.com/giovanischiar/rule-of-3-wearos"
	    		onPress={() => navigation.navigate("Rule of 3")} 
	    	/>
	    	<PortifolioApp 
	    		name="Mo Channel" 
	    		url="https://github.com/giovanischiar/mo-channel"
	    		onPress={() =>navigation.navigate("Mo Channel")} 
	    	/>
	    	<PortifolioApp 
	    		name="Pokechart" 
	    		url="https://github.com/giovanischiar/pokechart"
	    		onPress={() => navigation.navigate("Pokechart")} 
	    	/>
	    	<PortifolioApp 
	    		name="Bluversation" 
	    		url="https://github.com/giovanischiar/bluversation-ios"
	    		onPress={() => navigation.navigate("Bluversation")} 
	    	/>
{/*	      <Android/>
	      <WearOS/>
	      <AndroidTV/>
	      <IOS/>*/}
	    </View>
	  </ScrollView>
	)
}