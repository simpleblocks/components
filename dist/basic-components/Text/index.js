"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var component_1 = require("./component");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Definition = {
    id: "text",
    // List definition
    definition: {
        category: "Basic",
        icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "3x", icon: free_solid_svg_icons_1.faCube }),
        label: "Text",
    },
    // Rendering
    props: [],
    component: component_1.Text,
    canvas: component_1.TextCanvas,
    children: [],
    listenToContext: false,
    // Styling
    defaultStyles: {
        position: "relative",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    requiredClassnames: [],
};
exports.default = Definition;
//# sourceMappingURL=index.js.map