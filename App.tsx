import { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { PortifolioScreen } from './src/portfolio/PortifolioScreen';
import { AboutScreen } from './src/about/AboutScreen';
import { PortifolioAppScreen } from './src/details/PortifolioAppScreen';
import { useWindowDimensions } from './src/components/WindowDimensions';
import { HeaderBackButton } from '@react-navigation/elements';

export default function App() {
  var { height, width } = useWindowDimensions()
  const Drawer = createDrawerNavigator();
  const profilePhoto = require("./assets/info-icon.png");
  const { headerRight, profilePhotoStyle } = styles;
  const screenOptions = ({ navigation, route }): DrawerNavigationOptions => ({
    headerShown: true,
    headerStyle: {
      backgroundColor: '#3c78d8ff'
    },
    headerTitleStyle: {
       color: 'white',
    },
    drawerPosition: 'right',
    drawerType: width > 768 ? 'permanent' : 'front',
    headerLeft: (props) => route.name == 'Portifolio' ? <View/> : (
      <HeaderBackButton
        tintColor="white"
        onPress={() => {
           navigation.goBack(null);
        }}
      />
    ),
    headerRight: () => {
      return width > 768 ? undefined : (
        <TouchableOpacity 
          onPress={() => { navigation.toggleDrawer() }} 
          style={ headerRight }
        >
          <Image style={ profilePhotoStyle } source={profilePhoto} />
        </TouchableOpacity>
      )
    }
  });

  let androidTechStack = [
    "Android", 
    "Android Studio", 
    "Android SDK", 
    "Kotlin", 
    "MVVM", 
    "Hilt (Dagger)", 
    "Reactive Programming (Flow)", 
    "Jetpack Compose" 
  ];


  let iosTechStack = [
    "iOS", 
    "Xcode", 
    "Swift", 
    "MVVM",  
    "Reactive Programming (Combine)", 
    "Swift UI" 
  ];

  let FridgnetScreen = () => (
    <PortifolioAppScreen 
      name="Fridgnet" 
      subtitle="Collect interesting places, and pin them in your map like a fridge magnet!" 
      description ="This app shows you where all cities, counties, states, and countries your photos were taken. Each time you input a photo into the app, it will search for the city, county, state, and country, and then plot them on a map."
      url="https://github.com/giovanischiar/fridgnet"
      platforms={["Android"]}
      techStack={[...androidTechStack, "REST API (Nominatim)", "Database (Room)", "Geocoder"]}
    />
  );

  let MoChannelScreen = () => (
    <PortifolioAppScreen 
      name="Mo Channel" 
      subtitle="See your own channel with videos hosted in your computer!" 
      description ="This Android TV application allows you to watch videos hosted on your own computer on your TV."
      url="https://github.com/giovanischiar/mo-channel"
      platforms={["Android TV"]}
      techStack={[...androidTechStack, "Android TV", "Database (Room)", "Exoplayer", "REST API"]}
    />
  );

  let RuleOf3Screen = () => (
    <PortifolioAppScreen 
      name="Rule of 3" 
      subtitle="Calculate the famous rule of three on your wrist!" 
      description ="This tiny WearOS app allows you to use the rule of three to calculate the fourth number by inputting the prior three numbers."
      url="https://github.com/giovanischiar/rule-of-3-wearos"
      platforms={["Wear OS"]}
      techStack={[...androidTechStack, "Wear OS", "Database (Room)"]}
    />
  );

  let PokechartScreen = () => (
    <PortifolioAppScreen 
      name="Pokechart" 
      subtitle="Compare types to check their vulnerabilities, resistances, and more." 
      description ="Input the types, and the app will return the combined vulnerabilities and resistances."
      url="https://github.com/giovanischiar/pokechart"
      platforms={["Wear OS"]}
      techStack={[...androidTechStack, "Wear OS"]}
    />
  );

  let BluversationScreen = () => (
    <PortifolioAppScreen 
      name="Bluversation" 
      subtitle="A bluetooth chat" 
      description ="A simple bluetooth chat iOS and macOS application."
      url="https://github.com/giovanischiar/bluversation-ios"
      platforms={["iOS", "macOS"]}
      techStack={iosTechStack}
    />
  );

  const config = {
    screens: {
      Portifolio: {
        path: ''
      },
      
      Fridgnet: {
        path: 'fridgnet'
      },

      "Mo Channel": {
        path: "mo-channel"
      },
      
      "Rule of 3": {
        path: "rule-of-3"
      },

      Pokechart: {
        path: "pokechart"
      },

      Bluversation: {
        path: "bluversation"
      }
    },
  };
    
  return (
    <NavigationContainer linking={{config}}>
      <Drawer.Navigator 
        drawerContent={ AboutScreen } 
        initialRouteName="Portifolio" 
        screenOptions={screenOptions}
      >
        <Drawer.Screen name="Portifolio" component={ PortifolioScreen } />
        <Drawer.Screen name="Fridgnet" component={ FridgnetScreen } />
        <Drawer.Screen name="Mo Channel" component={ MoChannelScreen } />
        <Drawer.Screen name="Rule of 3" component={ RuleOf3Screen } />
        <Drawer.Screen name="Pokechart" component={ PokechartScreen } />
        <Drawer.Screen name="Bluversation" component={ BluversationScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  profilePhotoStyle: {
    width: 24, 
    height: 24, 
    right: 15
  }
});
