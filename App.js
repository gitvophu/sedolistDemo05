/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import PushNotification from "react-native-push-notification";
const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  popInitialNotification: true,
    requestPermissions: true
  })
  const pushNotificationc = ()=>{
    
    PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: title,
    message: message,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]'
  })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEMO PUSH THÔNG BÁO</Text>
      <Text>Tiêu đề</Text>
      <TextInput style={styles.input} value={title} onChangeText={(newTitle)=>setTitle(newTitle)}/>

      <Text>Nội dung</Text>
      <TextInput style={styles.input} value={message} onChangeText={(newMessage)=>setMessage(newMessage)}/>
      <Button title="Push" onPress={()=>pushNotificationc()} />
    </View>

  );
};
const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input:{
    height: 40,
    borderWidth:1,
    borderColor:'black',
    margin:5,
    marginBottom:20
  },
  title:{
    fontSize:18,
    color:'red'
  }
})

export default App;
