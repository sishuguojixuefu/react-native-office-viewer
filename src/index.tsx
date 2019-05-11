import React, { Component } from 'react'
import ReactNative, { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes'

interface PropTypes {
  readonly style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  readonly source: string
  readonly webRef: ((_?: any) => void) | undefined
  readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined
  readonly injectedJavaScript?: string | undefined
}

class OfficeViewer extends Component<PropTypes, {}> {
  public render() {
    const { webRef, source } = this.props
    return (
      <View style={[styles.container]}>
        <WebView
          {...this.props}
          ref={r => {
            if (webRef) {
              webRef(r)
            }
          }}
          source={{
            uri: source ? `https://view.officeapps.live.com/op/view.aspx?src=${source}` : '',
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export { OfficeViewer }
export default OfficeViewer
