import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Screenhome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	  {/* <Icon name="save" size={22}/>	 */}
      <Text>Home Screen</Text>
    </View>
  );
}
function Notes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notes Screen</Text>
    </View>
  );
}

function Lectures() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lecture Screen</Text>
    </View>
  );
}
function PYQs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PYQs Screen</Text>
    </View>
  );
}
function Quizzes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quiz Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Screenhome} />
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Lectures" component={Lectures} />
      <Drawer.Screen name="Previous Year Papers" component={PYQs} />
      <Drawer.Screen name="Quizzes" component={Quizzes} />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}
