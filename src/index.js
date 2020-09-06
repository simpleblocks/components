import * as BasicComponents from "./basic-components"

let componentsList = []
let componentsMap = new Map()

addComponents(BasicComponents.components)

export const addComponents = (newComponents) => {
    componentsList = [
        ...componentsList,
        ...newComponents
    ]
    generateMap(componentsList)
}

export const generateMap = (list) => {
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

export const getReactComponent = (id, isCanvas) => {
    return isCanvas ?
        componentsMap.get(id).canvas :
        componentsMap.get(id).component
}

export const getDefaultChildren = (id) => {
    return componentsMap.get(id).children
}

export const getDefaultProps = (id) => {
    let props = {}
    componentsMap.get(id).map(prop => props[prop.name] = prop.default)
    return props
}

export const getProps = (id) => {
    return componentsMap.get(id).props
}