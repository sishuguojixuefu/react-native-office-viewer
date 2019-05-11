import { Component } from 'react';
import ReactNative from 'react-native';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
interface PropTypes {
    readonly style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    /**
     * The Doc URI to load in the WebView. Can be a local or remote file.
     */
    readonly source: string;
    readonly webRef: ((_?: any) => void) | undefined;
    readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined;
    readonly injectedJavaScript?: string | undefined;
    readonly service: 'microsoft' | 'google';
    /**
     * the mode for microsoft service(default 'pc')
     */
    readonly mode?: 'pc' | 'mobile';
}
declare class OfficeViewer extends Component<PropTypes, {}> {
    static defaultProps: {
        service: string;
        mode: string;
    };
    render(): JSX.Element;
}
export { OfficeViewer };
export default OfficeViewer;
