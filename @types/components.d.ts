import React from "react"

export type BlockDefinition = {
    id: String,
  
    // List definition
    definition: {
      category: String,
      icon: React.ReactNode,
      label: String,
    },
  
    // Rendering
    props: [],
    component: React.ReactNode,
    canvas: React.ReactNode,
    children: React.ReactNode,
    listenToContext: Boolean?,
  
    // Styling
    defaultStyles: Object,
    requiredClassnames: String[]?,
  }

export type BlockProps = {
    stateProps?: any,
    htmlProps: any,
    children?: React.ReactNode
}

export type BlockType = (props: BlockProps, context?: any) => React.ReactNode