export default pluginCreator;
declare function pluginCreator(): {
    postcssPlugin: string;
    /**
     * @param {import('postcss').Root} css
     * @param {{result: import('postcss').Result & {root: {rawCache?: any}}}} arg
     */
    OnceExit(css: import('postcss').Root, { result }: {
        result: import('postcss').Result & {
            root: {
                rawCache?: any;
            };
        };
    }): void;
};
declare namespace pluginCreator {
    const postcss: boolean;
}
