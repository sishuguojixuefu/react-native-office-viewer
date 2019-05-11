import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
// import OfficeApps from '@youngjs/react-native-officeapps-wrapper'
import Spinner from 'react-native-loading-spinner-overlay'
import { OfficeViewer } from './dist'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: '',
      visible: false,
    }
  }

  async componentDidMount() {
    try {
      this.setState({ visible: true })
      const response = await fetch('http://yapi.youngjuning.com/mock/11/api/office')
      const responseJson = await response.json()
      this.setState({
        source: responseJson.docx,
        visible: false,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { visible, source } = this.state

    return (
      <View style={styles.container}>
        <Spinner visible={visible} cancelable animation="fade" textStyle={styles.textStyle} textContent="Loading..." />
        <OfficeViewer service="microsoft" source={source} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  textStyle: {
    color: '#ffffff',
  },
})
