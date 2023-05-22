import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react/vector-icons/AntDesign';
// import { SafeAreaView } from 'react-native-safe-area-context';











function Screenhome() {
  const [value, setValue] = useState(null);
 const [isFocus, setIsFocus] = useState(false);


 
const branch = [
  { label: 'Computer Science & Engineering', value: '1' },
  { label: 'Information Technology', value: '2' },
  { label: 'AI & DS', value: '3' },
  { label: 'ECE', value: '4' },
  { label: 'Mechanical Engineering', value: '5' },
  { label: 'Civil Engineering', value: '6' },
];
const year = [
  { label: '1st Year', value: 'A' },
  { label: '2nd Year', value: 'B' },
  { label: '3rd Year', value: 'C' },
  { label: '4th Year', value: 'D' },

];
const semester = [
  { label: '1st Sem', value: 'a' },
  { label: '2nd Sem', value: 'b' },
  { label: '3rd Sem', value: 'c' },
  { label: '4th Sem', value: 'd' },
  { label: '5th Sem', value: 'e' },
  { label: '6th Sem', value: 'f' },
  { label: '7th Sem', value: 'g' },
  { label: '8th Sem', value: 'h' },

];

  return (
    
    <View style={{ flex: 1, justifyContent:'flex-start',alignItems:'center', backgroundColor:'gray' }}>
      {/* <StatusBar barStyle="light-content" /> */}
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={branch}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Branch' : '...'}
          // searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={year}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Year' : '...'}
          // searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={semester}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Semester' : '...'}
          // searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
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
function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Screen</Text>
    </View>
  );
}
function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Developer: Virendra Kumar & Khushhal Singh</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={Screenhome} />
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Lectures" component={Lectures} />
        <Drawer.Screen name="Previous Year Papers" component={PYQs} />
        <Drawer.Screen name="Quizzes" component={Quizzes} />
        <Drawer.Screen name="Contact Us" component={Contact} />
        <Drawer.Screen name="About Us" component={About} />
      </Drawer.Navigator>

      
    </>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:20,
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 15,
  },
  dropdown: {
    width:300,
    height: 50,
    borderColor: '#8fbc8f',
    borderWidth: 0.9,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom:10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'#000'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
