export default LayerCache;
declare function LayerCache(): void;
declare class LayerCache {
    _values: Map<any, any>;
    /** @param {number} startIndex */
    optimizeValues(startIndex: number): void;
    /** @param {string} value */
    addValue(value: string): void;
    /** @param {string} value */
    getValue(value: string): any;
}
