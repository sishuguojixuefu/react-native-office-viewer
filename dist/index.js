"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const services = {
    microsoft: 'https://view.officeapps.live.com/op/view.aspx?src=',
    google: 'https://docs.google.com/viewer?url=',
};
class OfficeViewer extends react_1.Component {
    render() {
        const { webRef, source, service, mode } = this.props;
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container] },
            react_1.default.createElement(react_native_webview_1.WebView, Object.assign({}, this.props, { ref: r => {
                    if (webRef) {
                        webRef(r);
                    }
                }, source: {
                    uri: source ? `${services[service]}${source}` : '',
                    headers: service === 'microsoft' && mode === 'pc'
                        ? {
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.8 Safari/537.36',
                        }
                        : {},
                } }))));
    }
}
OfficeViewer.defaultProps = {
    service: 'microsoft',
    mode: 'pc',
};
exports.OfficeViewer = OfficeViewer;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = OfficeViewer;
//# sourceMappingURL=index.js.map