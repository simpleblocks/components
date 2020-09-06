import React from "react"
import BlockSelector from "../../templates/components/BlockSelector"

export const Div = ({ stateProps, htmlProps, children }) => {
  return <div {...htmlProps}>{children}</div>
}
Div.displayName = "Div"

export const DivCanvas = ({ stateProps, htmlProps, children }) => {
  return (
    <div {...htmlProps}>
      {children}

      {!children && <BlockSelector selected={stateProps.id} />}
    </div>
  )
}
DivCanvas.displayName = "DivCanvas"
