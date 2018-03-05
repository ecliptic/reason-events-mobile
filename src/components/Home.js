import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export class Home extends React.Component {
  render () {
    return (
      <View styles={Styles.container}>
        <Text>Reason Events</Text>
      </View>
    )
  }
}

export default Home
