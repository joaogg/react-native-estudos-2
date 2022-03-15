//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import all the basic component we have used
 
export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details kkkk!</Text>
        <Image source={require('./src/assets/JoaoG.png')} style={styles.image} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
