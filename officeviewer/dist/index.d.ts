import { Component } from 'react';
import ReactNative from 'react-native';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
interface PropTypes {
    readonly source: string;
    readonly webRef: (_?: any) => void;
    readonly containerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    readonly onMessage?: ((event: ReactNative.NativeSyntheticEvent<WebViewMessage>) => void) | undefined;
    readonly injectedJavaScript?: string | undefined;
}
declare class OfficeViewer extends Component<PropTypes, {}> {
    static defaultProps: {
        webRef: (_?: any) => {};
    };
    render(): JSX.Element;
}
export { OfficeViewer };
export default OfficeViewer;
