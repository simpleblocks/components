import { BlockDefinition, ComponentsInstance, BlockDefDetails, BlockType } from "../@types/components";
export declare class ComponentsManager implements ComponentsInstance {
    componentsList: BlockDefinition[];
    componentsMap: Map<String, BlockDefinition>;
    constructor(components?: BlockDefinition[]);
    addComponents: (newComponents: BlockDefinition[]) => void;
    generateMap: (list: BlockDefinition[]) => void;
    getComponentsDefinitions: () => BlockDefDetails[];
    getDefinition: (id: String) => {};
    getReactComponent: (id: String, isCanvas: Boolean) => BlockType | null;
    getDefaultChildren: (id: String) => String[] | null;
    getDefaultProps: (id: String) => any;
    getProps: (id: String) => {};
}
