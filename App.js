/* eslint-disable react-native/no-inline-styles */
// import {Image} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import Main from './src/Screen/Main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
