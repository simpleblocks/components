import React from "react"
import { Div, DivCanvas } from "./component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCube } from "@fortawesome/free-solid-svg-icons"
import { BlockDefinition } from "../../../@types/components.def"

const Definition: BlockDefinition = {
  id: "div",

  // List definition
  definition: {
    category: "Basic",
    icon: <FontAwesomeIcon size="3x" icon={faCube} />,
    label: "Div",
  },

  // Rendering
  props: [],
  component: Div,
  canvas: DivCanvas,
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

}

export default Definition
