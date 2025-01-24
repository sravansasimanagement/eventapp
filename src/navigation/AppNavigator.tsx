import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import BadgeScreen from '../screens/BadgeScreen';
import AskQuestionScreen from '../screens/AskQuestionScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import SpeakerDetailsScreen from '../screens/SpeakerDetailsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

type RootDrawerParamList = {
  AllEvents: undefined;
  Home: undefined;
  Agenda: undefined;
  Speakers: undefined;
  Badge: undefined;
};

const CustomDrawerContent = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate('Drawer');
        }}>
        <Feather name="home" size={20} color="#000" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Agenda')}>
        <Feather name="calendar" size={20} color="#000" />
        <Text style={styles.menuText}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Speakers')}>
        <Icon name="people-outline" size={20} color="#000" />
        <Text style={styles.menuText}>Speakers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Badge')}>
        <Feather name="award" size={20} color="#000" />
        <Text style={styles.menuText}>Badge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Venue')}>
        <Feather name="map" size={20} color="#000" />
        <Text style={styles.menuText}>Venue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BrandInnovation')}>
        <Feather name="video" size={20} color="#000" />
        <Text style={styles.menuText}>Brand Innovation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('BrandVideos')}>
        <Feather name="image" size={20} color="#000" />
        <Text style={styles.menuText}>Brand Videos</Text>
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <Octicons name="question" size={20} color="#000" />
        <Text style={styles.menuText}>Ask Questions</Text>
      </View>
      <View style={styles.menuItem}>
        <Feather name="bar-chart-2" size={20} color="#000" />
        <Text style={styles.menuText}>Voting</Text>
      </View>
      <View style={styles.menuItem}>
        <Feather name="send" size={20} color="#000" />
        <Text style={styles.menuText}>Social Media</Text>
      </View>
      <View style={styles.menuItem}>
        <Feather name="clipboard" size={20} color="#000" />
        <Text style={styles.menuText}>Survey</Text>
      </View>
      <View style={styles.menuItem}>
        <Feather name="feather" size={20} color="#000" />
        <Text style={styles.menuText}>CME</Text>
      </View>
    </View>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <CustomDrawerContent />}
    screenOptions={{
      drawerStyle: {
        width: Dimensions.get('window').width / 1.5,
      },
    }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Agenda" component={AgendaScreen} />
    <Drawer.Screen name="Badge" component={BadgeScreen} />
    <Drawer.Screen name="AskQuestion" component={AskQuestionScreen} />
    <Drawer.Screen name="Speakers" component={SpeakersScreen} />
    <Drawer.Screen name="SpeakerDetails" component={SpeakerDetailsScreen} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      {/* Standalone Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      {/* Drawer Navigator Starts After Home */}
      <Drawer.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Badge" component={BadgeScreen} />
      <Stack.Screen name="AskQuestion" component={AskQuestionScreen} />
      <Stack.Screen name="Speakers" component={SpeakersScreen} />
      <Stack.Screen name="SpeakerDetails" component={SpeakerDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingLeft: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0057B7',
    marginTop: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
  },
});

export default AppNavigator;
