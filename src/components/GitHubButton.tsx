import { Linking, TouchableOpacity, Image } from 'react-native'

export function GitHubButton(props: {url: String}) {
	const githubLogo = require("../../assets/github-icon.png")
	let { url } = props

	return (
		<TouchableOpacity onPress={() => { Linking.openURL(url.toString()) }}>
			<Image style={{width: 24, height: 24, borderRadius: '50%'}} source={githubLogo} />
		</TouchableOpacity>
	)
}