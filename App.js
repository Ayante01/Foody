import React from 'react';
import {View, StatusBar} from 'react-native';
import Router from './Router';
import { fonts } from './src/utils/fonts';
import LoadAssets from './src/utils/loadAssets';


const assets = [];

const App = () => {
  return (

    <LoadAssets fonts={fonts} assets={assets}>
      <View style={{flex:1}}>
          <StatusBar barStyle={'light-content'}></StatusBar>
          <Router></Router>
      </View>
		</LoadAssets>

    
  );
};

export default App;

