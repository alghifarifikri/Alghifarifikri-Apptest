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

export default function Profile({
  data = {},
  loading = false,
  loadingPost = false,
  loadingDelete = false,
  show = false,
  edit = false,
  add = false,
  onPress = () => {},
  onChange = () => {},
  onDelete = () => {},
}) {
  return (
    <View style={styles.MainContainer}>
      <View style={{padding: 15, backgroundColor: '#953E46'}}>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              marginBottom: -40,
              borderRadius: 100,
              alignSelf: 'center',
            }}
            source={{
              uri:
                data.photo !== 'N/A'
                  ? data.photo
                  : 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#F4E3CF',
        }}>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            testID="input-firstname"
            onChangeText={e => onChange({firstName: e})}
            style={styles.textInput}
            value={data?.firstName}
            // editable={show ? false : true}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            testID="input-lastname"
            onChangeText={e => onChange({lastName: e})}
            style={styles.textInput}
            value={data?.lastName}
            // editable={show ? false : true}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Age</Text>
          <TextInput
            testID="input-age"
            onChangeText={e => onChange({age: Number(e)})}
            style={styles.textInput}
            value={data?.age?.toString()}
            // editable={show ? false : true}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        {add ? null : (
          <View
            style={{
              backgroundColor: loadingDelete ? 'gray' : '#953E46',
              marginTop: 100,
              marginBottom: 100,
              marginLeft: 30,
              borderRadius: 20,
              width: '30%',
            }}>
            <TouchableOpacity
              testID={'button-delete'}
              disabled={loadingDelete}
              onPress={() => onDelete()}>
              <Text
                style={{
                  color: '#F4E3CF',
                  textAlign: 'center',
                  fontSize: 16,
                  padding: 10,
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            backgroundColor: loading || loadingPost ? 'gray' : '#953E46',
            marginTop: 100,
            marginBottom: 100,
            marginLeft: 'auto',
            marginRight: 30,
            borderRadius: 20,
            width: '30%',
          }}>
          <TouchableOpacity
            disabled={add ? loadingPost : loading}
            testID={'button-save'}
            onPress={() => onPress()}>
            <Text
              style={{
                color: '#F4E3CF',
                textAlign: 'center',
                fontSize: 16,
                padding: 10,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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

  textInput: {
    alignSelf: 'stretch',
    padding: 2,
    marginHorizontal: 16,
    borderBottomColor: '#953E46',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
  },

  title: {
    alignSelf: 'stretch',
    marginHorizontal: 16,
    color: '#953E46',
    fontSize: 10,
  },
});
