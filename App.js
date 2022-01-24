import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import MyButton from './src/components/MyButton';

export default function App() {
  const [count, setCount] = useState(0);
  const onPressPlus = () => setCount(prevCount => prevCount + 1);
  const onPressMinus = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#AF6EE5', '#604fd0', '#4536a2']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0.7}}>
        <Image
          source={require('./src/webLogo.png')}
          style={{
            resizeMode: 'contain',
            height: 70,
            width: 70,
          }}
        />

        <Text style={styles.hiText}>Hi Aniket</Text>
        <View style={styles.c1}>
          <Image source={require('./src/download.png')} />
          <Text style={styles.Welcome}>Welcome to SwiftCounter</Text>
          <Text style={styles.para}>Test your tapping speed here!</Text>
        </View>
        <View style={styles.counterBox}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.btnContainer}>
          <MyButton onPress={onPressMinus} MyText="Decrease" />
          <MyButton onPress={onPressPlus} MyText="Increase" />
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    padding: 0,
  },

  counterBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#FFFFFF',
    // borderWidth: 1,
    borderRadius: 30,
    margin: 20,
    width: 120,
    height: 120,
    backgroundColor: '#5451d6',
  },

  count: {
    fontSize: 60,
    color: 'white',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  para: {
    color: 'white',
    fontSize: 20,
  },

  Welcome: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  c1: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  hiText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
