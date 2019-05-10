import React, { Component } from 'react'
import ReactNative, { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes'

interface PropTypes {
  readonly source: string
  readonly webRef: (_?: any) => void
  readonly containerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>
  readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined
}

class OfficeViewer extends Component<PropTypes, {}> {
  public static defaultProps: {
    webRef: (_?: any) => {}
  }

  public render() {
    const { webRef, source, containerStyle } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        <WebView
          {...this.props}
          ref={r => webRef(r)}
          source={{
            uri: `https://view.officeapps.live.com/op/view.aspx?src=${source}`,
          }}
          onMessage={() => {}}
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

export default OfficeViewer
