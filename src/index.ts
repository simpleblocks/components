import * as BasicComponents from "./basic-components"
import { BlockDefinition } from "../@types/components"

let componentsList: BlockDefinition[] = []
let componentsMap: Map<String, BlockDefinition> = new Map()

export const addComponents = (newComponents: BlockDefinition[]) => {
    componentsList = [
        ...componentsList,
        ...newComponents
    ]
    generateMap(componentsList)
}

export const generateMap = (list: BlockDefinition[]) => {
    list.map((component) => {
        componentsMap.set(component.id, component)
    })
}

export const getComponentsDefinitions = () => {
    return componentsList.map((component) => ({
        id: component.id,
        ...component.definition
    }))
}

export const getDefinition = (id: String) => {
    const component = componentsMap.get(id)
    return component ? {
        id: id,
        ...component.definition,
        // customProps: component.customProps
    } : {}
}

export const getReactComponent: React.ReactNode = (id: String, isCanvas: Boolean) => {
    const component = componentsMap.get(id)
    if (!component) return null
    return isCanvas ?
        component.canvas :
        component.component
}

export const getDefaultChildren: React.ReactNode = (id: String) => {
    const component = componentsMap.get(id)
    return component ? component.children : null
}

export const getDefaultProps = (id: String) => {
    let props: any = {}
    const component = componentsMap.get(id)
    if (!component) return null
    component.props.map((prop: any) => props[prop.name] = prop.default)
    return props
}

export const getProps = (id: String) => {
    const component = componentsMap.get(id)
    return component ? component.props : {}
}

/* Initialize */
addComponents(BasicComponents.components)