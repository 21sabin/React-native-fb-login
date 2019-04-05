import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { LoginManager ,AccessToken  } from 'react-native-fbsdk'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




export default class App extends Component {

  _onLoginPress = async ()=>{
    console.log('function called')
    const res = await LoginManager.logInWithReadPermissions(['public_profile','email']);
    if( res.grantedPermissions && !res.isCancelled ){
      const data = await AccessToken.getCurrentAccessToken();
      console.log(data,"Data")
    }
    console.log(res,"res")
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Hello</Text>
       <Button title="Login with facebook" onPress={this._onLoginPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
