import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useRef } from 'react'

export default function AnimationScreen () {
  const animation = useRef(null)

  return (
    <View
      style={{
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LottieView
        ref={animation}
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#000'
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/lotiee/netflix.json')}
      />
      {/* 
<Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} /> */}
    </View>
  )
}

const styles = StyleSheet.create({})
