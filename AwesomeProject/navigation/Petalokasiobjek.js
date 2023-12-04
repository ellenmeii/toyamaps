import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {WebView} from 'react-native-webview';
import Getdatatoya from '../Getdatatoya';
import Portofolio from '../App';

const Tab = createBottomTabNavigator();

const forminput = 'https://ellenmeii.github.io/pgpbl-12/index.html';
const petaweb = 'https://ellenmeii.github.io/pgpbl-12/map.html';

const Logo = () => (
  <View>
    <Image
      source={require('../assets/img/playstore.png')}
      style={styles.logo}
    />
  </View>
);
const Header = () => (
  <View style={styles.header}>
    <Logo />
    <Text style={styles.headerText}>ToyaMaps</Text>
  </View>
);

const Button = ({label, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToMap = () => {
    navigation.navigate('Map');
  };

  const navigateToListData = () => {
    navigation.navigate('List Data');
  };

  const navigateToAddData = () => {
    navigation.navigate('Add Data');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <>
      <Header />

      <ImageBackground
        source={{
          uri: 'https://i.ibb.co/LrDgVhF/backgroundd.png',
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button label="Toya Maps" onPress={navigateToMap} />
            <Button label="Toyagama List Data" onPress={navigateToListData} />
            <Button
              label="Add Point Data Toyagama"
              onPress={navigateToAddData}
            />
            <Button label="About" onPress={navigateToProfile} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
const MapScreen = () => <WebView source={{uri: petaweb}} />;
const AddDataScreen = () => <WebView source={{uri: forminput}} />;
const ListDataScreen = () => (
  <View>
    <Getdatatoya />
  </View>
);
const ProfileScreen = () => (
  <View>
    <Portofolio />
  </View>
);

const MyTabs = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          paddingHorizontal: 20,
          paddingBottom: 8,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 0 : -5,
        },
        tabBarIconStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : -5,
        },
        tabBarIconStyle: {},
        tabBarActiveTintColor: '#2391d9',
        tabBarInactiveTintColor: '#b0bbc4',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5 name="home" size={22} style={{color: '#2391d9'}} />
          ),
          tabBarStyle: {display: 'none'}, // Hide the tab bar on the Home screen
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5
              name="map-marker-alt"
              color="#D9EDFC"
              size={22}
              style={{color: '#2391d9'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Data"
        component={AddDataScreen}
        options={{
          tabBarLabel: 'Add Data',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5
              name="plus-circle"
              color="#D9EDFC"
              size={22}
              style={{color: '#2391d9'}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="List Data"
        component={ListDataScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5
              name="list-ul"
              color="#D9EDFC"
              size={22}
              style={{color: '#2391d9'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <Fontawesome5
              name="user-alt"
              color="#D9EDFC"
              size={22}
              style={{color: '#2391d9'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '80%', // Adjust the width as needed
  },

  button: {
    backgroundColor: '#FEFEFA',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginVertical: 8,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    backdropFilter: 'blur(5px)', // Glassmorphism blur effect
  },

  buttonText: {
    fontSize: 18,
    color: '#2391d9',
    fontWeight: '600',
    textAlign: 'center',
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backdropFilter: 'blur(100px)', // Glassmorphism blur effect
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FEFEFA', // Glassmorphism background color with transparency
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2391d9',
    fontFamily: 'Poppins-Bold',
    marginLeft: 5, // Adjust the margin as needed to fine-tune alignment
  },

  logo: {
    width: 30, // Adjust the width of the logo
    height: 30, // Adjust the height of the logo
  },
});
export default MyTabs;
