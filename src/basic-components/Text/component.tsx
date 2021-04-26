import React from "react"
// import BlockSelector from "../../templates/components/BlockSelector"
import { BlockType } from "../../../@types/components"

export const Text: BlockType = ({ stateProps, htmlProps, children }) => {
  return <div {...htmlProps}>{stateProps.text}</div>
}

export const TextCanvas: BlockType = ({ stateProps, htmlProps, children }) => {
  return (
    <span {...htmlProps}>
      {stateProps.text}
    </span>
  )
}
