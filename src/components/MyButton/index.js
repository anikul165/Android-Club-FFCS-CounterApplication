import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function MyButton({onPress, MyText}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>{MyText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#5450d6',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 20,
  },

  btnTxt: {
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: 25,
    padding: 10,
  },
});
