/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Heyyy</Text>
        <Text>What's Popping</Text>
        <Text>Nothing much how about you </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    justifyContent:'center',
    alignItems: 'center',
  },

});


