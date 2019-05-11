"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_webview_1 = require("react-native-webview");
var services = {
    microsoft: 'https://view.officeapps.live.com/op/view.aspx?src=',
    google: 'https://docs.google.com/viewer?url=',
};
var OfficeViewer = /** @class */ (function (_super) {
    __extends(OfficeViewer, _super);
    function OfficeViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfficeViewer.prototype.render = function () {
        var _a = this.props, webRef = _a.webRef, source = _a.source, service = _a.service, mode = _a.mode;
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container] },
            react_1.default.createElement(react_native_webview_1.WebView, __assign({}, this.props, { ref: function (r) {
                    if (webRef) {
                        webRef(r);
                    }
                }, source: {
                    uri: source ? "" + services[service] + source : '',
                    headers: service === 'microsoft' && mode === 'pc'
                        ? {
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.8 Safari/537.36',
                        }
                        : {},
                } }))));
    };
    OfficeViewer.defaultProps = {
        service: 'microsoft',
        mode: 'pc',
    };
    return OfficeViewer;
}(react_1.Component));
exports.OfficeViewer = OfficeViewer;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = OfficeViewer;
//# sourceMappingURL=index.js.map