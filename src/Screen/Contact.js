/* eslint-disable react-native/no-inline-styles */
// import {Image} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function Contact({
  loading = false,
  data = [],
  addBtn = () => {},
  onPress = () => {},
  refresh = () => {},
}) {
  return (
    <View style={styles.MainContainer}>
      <View style={{padding: 20, backgroundColor: '#953E46'}}>
        <Text
          style={{
            color: '#F4E3CF',
            textAlign: 'center',
          }}>
          All Contacts
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#F4E3CF',
        }}>
        <FlatList
          style={{marginBottom: '20%'}}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 50}}
                    source={{
                      uri: item.photo,
                    }}
                  />
                </View>
                <View style={{marginLeft: 10, marginTop: 5}}>
                  <Text style={{color: '#953E46'}}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <Text style={{color: '#953E46'}}>Age {item.age}</Text>
                </View>
              </View>
              <View
                style={{margin: 10, height: 1, backgroundColor: '#953E46'}}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          onRefresh={() => refresh()}
          refreshing={loading}
        />
      </View>
      <TouchableOpacity
        testID={'button-add'}
        activeOpacity={0.5}
        onPress={() => addBtn()}
        style={styles.TouchableOpacityStyle}>
        <Image
          source={{
            uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#F4E3CF',
    flex: 1,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
