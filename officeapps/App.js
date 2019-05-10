import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
// import OfficeApps from '@youngjs/react-native-officeapps-wrapper'
import { OfficeViewer } from './dist'

const run = `window.ReactNativeWebView.postMessage("Hello React Native！")`

export default class App extends Component {
  componentDidMount() {
    this.webRef.injectJavaScript(run)
  }

  render() {
    return (
      <View style={styles.container}>
        <OfficeViewer
          webRef={r => {
            this.webRef = r
          }}
          source="http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
          onMessage={({ nativeEvent }) => {
            alert(nativeEvent.data)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
})
