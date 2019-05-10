import { Component } from 'react';
import ReactNative from 'react-native';
interface PropTypes {
    readonly source: string;
    readonly webRef: (_?: any) => void;
    readonly containerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;
}
declare class OfficeViewer extends Component<PropTypes, {}> {
    static defaultProps: {
        webRef: (_?: any) => {};
    };
    render(): JSX.Element;
}
export default OfficeViewer;
