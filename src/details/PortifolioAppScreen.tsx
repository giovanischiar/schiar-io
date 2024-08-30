import { ScrollView, View, Image, Text, StyleSheet, ImageSourcePropType, DimensionValue } from 'react-native';
import { PortifolioAppScreenProps } from './PortifolioAppScreenProps';
import { Screenshot } from './Screenshot';
import { GitHubButton } from '../components/GitHubButton';
import { useWindowDimensions } from '../components/WindowDimensions';
import { Badge } from '../components/Badge';

export function PortifolioAppScreen(props: PortifolioAppScreenProps) {
	var { name, subtitle, description, url, techStack, platforms } = props
	var iconImage = require("../../assets/app-icons/fridgnet.png");
	let padding = 15
	var width = useWindowDimensions().width
	var { 
		appTitle, 
		spacer, 
		headerTitle, 
		container, 
		icon, 
		sectionTitle, 
		screenshotPhone, 
		screenshotTV, 
		screenshotWatch, 
		techStackContainer,
	} = styles(padding, width);
 
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

	var screenshots: Screenshot[] = [
		{ imageSource: require("../../assets/apps/fridgnet/screenshots/home-screen.png"), platform: 'phone' },
		{ imageSource: require("../../assets/apps/fridgnet/screenshots/map-screen.png"), platform: 'phone' },
		{ imageSource: require("../../assets/apps/fridgnet/screenshots/photos-screen.png"), platform: 'phone'},
		{ imageSource: require("../../assets/apps/fridgnet/screenshots/polygons-screen-united-states.png"), platform: 'phone'}
	]

  switch (name) {
    case 'Bluversation': {
      screenshots = [
				{ imageSource: require("../../assets/apps/bluversation/screenshots/contacts-dialog-ios.png"), platform: 'phone' },
				{ imageSource: require("../../assets/apps/bluversation/screenshots/conversation-screen-ios.png"), platform: 'phone' },
				{ imageSource: require("../../assets/apps/bluversation/screenshots/conversations-screen-full-ios.png"), platform: 'phone'}
			]
      break;
    }

    case 'Mo Channel': {
			screenshots = [
				{ imageSource: require("../../assets/apps/mo-channel/screenshots/editting-server-url.gif"), platform: 'tv' },
				{ imageSource: require("../../assets/apps/mo-channel/screenshots/initial-screel-with-content.png"), platform: 'tv' },
				{ imageSource: require("../../assets/apps/mo-channel/screenshots/tv-show-screen.png"), platform: 'tv'}
			]
      break;
    }

    case 'Rule of 3': {
			screenshots = [
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/calculating-the-result.gif"), platform: 'watch' },
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/changing-the-unknown-position.gif"), platform: 'watch' },
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/cross-multiplication-screen-empty-without-history.png"), platform: 'watch'},
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/erasing-all-inputs.gif"), platform: 'watch'},
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/inputting-numbers.gif"), platform: 'watch'},
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/seeing-the-history.gif"), platform: 'watch'},
				{ imageSource: require("../../assets/apps/rule-of-3/screenshots/seeing-the-result.gif"), platform: 'watch'}
			]
      break;
    }

    case 'Pokechart': {
			screenshots = [
				{ imageSource: require("../../assets/apps/pokechart/screenshots/selecting-multiple-types.gif"), platform: 'watch' },
				{ imageSource: require("../../assets/apps/pokechart/screenshots/selecting-single-type.gif"), platform: 'watch' },
				{ imageSource: require("../../assets/apps/pokechart/screenshots/types-screen.png"), platform: 'watch'}
			]
      break;
    }
  }

	return (
	  <ScrollView style={container}>
	  	<View style={{flexDirection: 'row', paddingHorizontal: padding, paddingTop: padding}}>
	    	<Image style={icon} source={iconImage} />
	    	<View style={headerTitle}>
	    		<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
	    			<Text style={appTitle}>{name}</Text>
	    			<GitHubButton url={url}/>
	    		</View>
	   			<Text>{subtitle}</Text>
	   		</View>
	   	</View>
 			<View style={spacer} />
  		<View style={[techStackContainer, {justifyContent: 'center'}]}>
  			{
  				platforms.map((platform, index) => <Badge backgroundColor='#3c78d8ff' text={platform} showIcon/>)
  			}
  		</View>
	   	<View style={spacer} />
	    <View style={{paddingHorizontal: padding}}>
	    	<Text style={sectionTitle}>About</Text>
	    	<Text>{description}</Text>
	    </View>
	   	<View style={spacer} />
	    <View style={{paddingHorizontal: padding}}>
	    	<Text style={sectionTitle}>Tech Stack</Text>
	    	<View style={techStackContainer}>
	    		{
	    			techStack.map((tech, index) => <Badge backgroundColor={['#08415C', '#1c4587', '#172D21', '#895b1e', '#41BBD9'][index % 5] } text={tech}/>)
	    		}
	    	</View>
	    </View>
	    <View style={spacer} />
	    <View style={{paddingBottom: padding}}>
		    <Text style={[sectionTitle, {paddingHorizontal: padding}]}>Screenshots</Text>
		    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
		    	{
		    		screenshots.map((screenshot: Screenshot, index: Number) => <Image style={screenshot.platform == 'phone' ? screenshotPhone : screenshot.platform == 'watch' ? screenshotWatch : screenshotTV} source={screenshot.imageSource} />)
		    	}
		    </View>
	    </View>
	  </ScrollView>
	)
}

const styles = (padding: DimensionValue, width: DimensionValue) => StyleSheet.create({
	appTitle: {
		fontSize: 25,
		marginEnd: 5
	},

	techStackContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5
	},

	headerTitle: {
		marginStart: 15,
		flex: 1, 
		flexWrap: 'wrap'
	},

	spacer: {
		height: padding
	},

	container: {
		
	},

	sectionTitle: {
		fontSize: 20,
		marginBottom: padding
	},

	icon: {
		width: 150,
		height: 150
	},

	screenshotPhone: {
		width: 232.05, 
		height: 490.8, 
		marginRight: 15, 
		marginBottom: 15, 
		resizeMode: 'contain', 
		maxWidth: width
	},

	screenshotWatch: {
		width: 232.05, 
		height: 232.05, 
		marginRight: 15, 
		marginBottom: 15, 
		resizeMode: 'contain', 
		maxWidth: width
	},

	screenshotTV: {
		width: 490.8, 
		height: 232.05,
		marginBottom: 15, 
		resizeMode: 'contain', 
		maxWidth: width
	}
})