import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-tailwindcss';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  animation: any;

  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  }

  render() {
    return (
      <View 
        style={
          styles.animationContainer
        }>
        <LottieView 
          ref={(animation: any) => {
            this.animation = animation;
          }}
          source={require('./assets/lottie.json')} 
          style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#eee',
          }}/>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: color.blue500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
