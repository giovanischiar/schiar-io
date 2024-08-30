import { ImageSourcePropType } from 'react-native';

export interface Screenshot {
	imageSource: ImageSourcePropType,
	platform: 'phone' | 'watch' | 'tv'
}