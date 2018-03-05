import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import {Provider} from 'react-redux'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import {store} from '../state/Store.bs'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default class App extends React.Component {
  render () {
    return (
      <View style={Styles.container}>
        <Provider store={store}>
          <Header />
          <Home />
          <Footer />
        </Provider>
      </View>
    )
  }
}
