import React from "react"
// import BlockSelector from "../../templates/components/BlockSelector"
import { BlockType } from "../../../@types/components"

export const Div: BlockType = ({ stateProps, htmlProps, children }) => {
  return <div {...htmlProps}>{children}</div>
}

export const DivCanvas: BlockType = ({ stateProps, htmlProps, children }) => {
  return (
    <div {...htmlProps}>
      {children}

      {/* {!children && <BlockSelector selected={stateProps.id} />} */}
    </div>
  )
}
