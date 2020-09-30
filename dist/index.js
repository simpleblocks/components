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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = void 0;
var BasicComponents = __importStar(require("./basic-components"));
var Components = /** @class */ (function () {
    function Components(components) {
        var _this = this;
        if (components === void 0) { components = []; }
        this.componentsList = [];
        this.componentsMap = new Map();
        this.addComponents = function (newComponents) {
            _this.componentsList = __spreadArrays(_this.componentsList, newComponents);
            _this.generateMap(_this.componentsList);
        };
        this.generateMap = function (list) {
            list.map(function (component) {
                _this.componentsMap.set(component.id, component);
            });
        };
        this.getComponentsDefinitions = function () {
            return _this.componentsList.map(function (component) { return (__assign({ id: component.id }, component.definition)); });
        };
        this.getDefinition = function (id) {
            var component = _this.componentsMap.get(id);
            return component
                ? __assign({ id: id }, component.definition) : {};
        };
        this.getReactComponent = function (id, isCanvas) {
            var component = _this.componentsMap.get(id);
            if (!component)
                return null;
            return isCanvas ? component.canvas : component.component;
        };
        this.getDefaultChildren = function (id) {
            var component = _this.componentsMap.get(id);
            return component ? component.children : null;
        };
        this.getDefaultProps = function (id) {
            var props = {};
            var component = _this.componentsMap.get(id);
            if (!component)
                return null;
            component.props.map(function (prop) { return (props[prop.name] = prop.default); });
            return props;
        };
        this.getProps = function (id) {
            var component = _this.componentsMap.get(id);
            return component ? component.props : {};
        };
        this.addComponents(BasicComponents.components);
        if (components)
            this.addComponents(components);
    }
    return Components;
}());
exports.Components = Components;
//# sourceMappingURL=index.js.map