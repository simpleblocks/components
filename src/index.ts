import * as BasicComponents from "./basic-components";
import { BlockDefinition, ComponentsInstance, BlockDefDetails } from "../@types/components.def";

export class Components implements ComponentsInstance {
  componentsList: BlockDefinition[] = [];
  componentsMap: Map<String, BlockDefinition> = new Map();

  constructor(components: BlockDefinition[] = []) {
    this.addComponents(BasicComponents.components);
    if (components) this.addComponents(components)
  }

  addComponents = (newComponents: BlockDefinition[]) => {
    this.componentsList = [...this.componentsList, ...newComponents];
    this.generateMap(this.componentsList);
  };

  generateMap = (list: BlockDefinition[]) => {
    list.map((component) => {
      this.componentsMap.set(component.id, component);
    });
  };

  getComponentsDefinitions = () => {
    return this.componentsList.map((component) => ({
      id: component.id,
      ...component.definition,
    } as BlockDefDetails));
  };

  getDefinition = (id: String) => {
    const component = this.componentsMap.get(id);
    return component
      ? {
          id: id,
          ...component.definition,
          // customProps: component.customProps
        }
      : {};
  };

  getReactComponent = (id: String, isCanvas: Boolean) => {
    const component = this.componentsMap.get(id);
    if (!component) return null;
    return isCanvas ? component.canvas : component.component;
  };

  getDefaultChildren = (id: String) => {
    const component = this.componentsMap.get(id);
    return component ? component.children : null;
  };

  getDefaultProps = (id: String) => {
    let props: any = {};
    const component = this.componentsMap.get(id);
    if (!component) return null;
    component.props.map((prop: any) => (props[prop.name] = prop.default));
    return props;
  };

  getProps = (id: String) => {
    const component = this.componentsMap.get(id);
    return component ? component.props : {};
  };
}
