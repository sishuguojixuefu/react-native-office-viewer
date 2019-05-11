import React, { Component } from 'react'
import ReactNative, { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes'

const services = {
  microsoft: 'https://view.officeapps.live.com/op/view.aspx?src=',
  google: 'https://docs.google.com/viewer?url=',
}

interface PropTypes {
  readonly style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  /**
   * The Doc URI to load in the WebView. Can be a local or remote file.
   */
  readonly source: string
  readonly webRef: ((_?: any) => void) | undefined
  readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined
  readonly injectedJavaScript?: string | undefined
  readonly service: 'microsoft' | 'google'
}

class OfficeViewer extends Component<PropTypes, {}> {
  public static defaultProps = {
    service: 'microsoft',
  }

  public render() {
    const { webRef, source, service } = this.props
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
            uri: source ? `${services[service]}${source}` : '',
            headers:
              service === 'microsoft'
                ? {
                    'user-agent':
                      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.8 Safari/537.36',
                  }
                : {},
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
