import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

export function AboutScreen() {
  const profilePhoto = require("../../assets/giovani-schiar-profile-pic.png")
  const githubLogo = require("../../assets/github-icon.png")
  const linkedInIcon = require("../../assets/linkedin-icon.png")

  return (
    <View style={{flex: 1, padding: 30, alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 30}}>About me</Text>
      <Image style={{width: 200, height: 200, borderRadius: '50%', marginBottom: 15}} source={profilePhoto} />
      <Text style={{marginBottom: 15, fontSize: 20}}>Giovani Schiar</Text>
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/giovanischiar") }}>
          <Image style={{width: 24, height: 24, borderRadius: '50%', marginRight: 5}} source={githubLogo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL("https://linkedin.com/in/giovanischiar") }}>
          <Image style={{width: 30, height: 24}} source={linkedInIcon} />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 16}}>Mobile Developer with 7+ years of native Android development and 4 years in hybrid app development using React Native. I’ve built and published diverse mobile applications across Android, iOS, Android TV, and Wear OS, leading projects like Comb, a cashback app, from concept to deployment. My GitHub (github.com/giovanischiar) reflects my commitment to innovative solutions, continuous learning, and user-centric design. Proficient in Kotlin, Jetpack Compose, and React Native, I’m eager to contribute my skills to impactful mobile projects.</Text>
    </View>
  );
}