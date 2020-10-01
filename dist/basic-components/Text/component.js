"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCanvas = exports.Text = void 0;
var react_1 = __importDefault(require("react"));
exports.Text = function (_a) {
    var stateProps = _a.stateProps, htmlProps = _a.htmlProps, children = _a.children;
    return react_1.default.createElement("div", __assign({}, htmlProps), children);
};
exports.TextCanvas = function (_a) {
    var stateProps = _a.stateProps, htmlProps = _a.htmlProps, children = _a.children;
    return (react_1.default.createElement("span", __assign({}, htmlProps), stateProps.text));
};
//# sourceMappingURL=component.js.map