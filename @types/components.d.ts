import React from "react"

export type ListDefinition = {
  category: String,
  icon: React.ReactNode,
  label: String,
}

export type BlockDefinition = {
    id: String,
  
    // List definition
    definition: ListDefinition,
  
    // Rendering
    props: [],
    component: React.ReactNode,
    canvas: React.ReactNode,
    children: String[],
    listenToContext?: Boolean,
  
    // Styling
    defaultStyles: Object,
    requiredClassnames?: String[],
  }

export type BlockProps = {
    stateProps?: any,
    htmlProps: any,
    children?: React.ReactNode
}

export type BlockDefDetails = ListDefinition & {
  id: string
} | {}

export type BlockType = (props: BlockProps, context?: any) => React.ReactNode

export interface ComponentsInstance {
  addComponents: (newComponents: BlockDefinition[]) => void,
  generateMap: (list: BlockDefinition[]) => void,
  getComponentsDefinitions: () => BlockDefDetails[],
  getDefinition: (id: String) => BlockDefDetails,
  getReactComponent: (id: String, isCanvas: Boolean) => React.ReactNode,
  getDefaultChildren: (id: String) => React.ReactNode,
  getDefaultProps: (id: String) => Object | null,
  getProps: (id: String) => Object
}