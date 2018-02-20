'use strict';
import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class BadInstagramCloneApp extends Component { 
	render() { 
		return ( 
			<View> 

			<TouchableOpacity> 
				<Text style={{fontSize: 14}}> SNAP </Text> 
			</TouchableOpacity>

			</View>
		);
	} 
} 

Registry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);