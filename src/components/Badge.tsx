import { View, StyleSheet, Image, Text } from 'react-native';

export function Badge(
	props: { text: String, backgroundColor: String, showIcon: Boolean | undefined }
) {
	const { text, backgroundColor } = props;
	const { container, icon, badgeText } = styles(backgroundColor);
	var iconSource = undefined
	var showIcon = props.showIcon ? props.showIcon : false
	
	switch(text) {
		case 'Android': {
			iconSource = require("../../assets/icons/phone-android-icon.png")
			break;
		}
		case 'iOS': {
			iconSource = require("../../assets/icons/phone-ios-icon.png")
			break;
		}
		case 'Wear OS': {
			iconSource = require("../../assets/icons/watch-icon.png")
			break;
		}
		case 'Android TV': {
			iconSource = require("../../assets/icons/tv-icon.png")
			break;
		}

		case 'macOS': {
			iconSource = require("../../assets/icons/desktop-macos-icon.png")
			break;
		}
	}

	return (
		<View style={container}>
			{iconSource && showIcon && (<Image style={icon} source={iconSource}/>)}
			<Text style={badgeText}>{text}</Text>
		</View>
	)
}

const styles = (backgroundColor: String) => StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: backgroundColor.toString(),
		padding: 10,
		borderRadius: 35
	},

	icon: {
		marginEnd: 5,
		width: 24,
		height: 24
	},

	badgeText: {
		color: 'white',
		fontWeight: 'bold'
	}
})