import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import camelCase from "lodash.camelcase";
import json from "rollup-plugin-json";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import path from "path";

const pkg = require("./package.json");

const libraryName = "--libraryname--";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
    {
        input: `src/index.ts`,
        output: [{ file: pkg.main, name: camelCase(libraryName), format: "umd", sourcemap: true }],
        // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
        external: [...Object.keys(pkg.peerDependencies || {})],
        watch: {
            include: "src/**",
        },
        plugins: [
            // Allow json resolution
            json(),
            // Compile TypeScript files
            // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
            commonjs(),
            // Allow node_modules resolution, so you can use 'external' to control
            // which external modules to include in the bundle
            // https://github.com/rollup/rollup-plugin-node-resolve#usage
            resolve({ extensions }),

            babel({
                extensions,
                babelHelpers: "bundled",
                include: ["src/**/*"],
            }),
            // Resolve source maps to the original source
            sourceMaps(),
        ],
    },
    {
        input: `src/index.ts`,
        output: [
            {
                file: path.parse(pkg.main).dir + `/${path.parse(pkg.main).name}` + "-min.js",
                name: camelCase(libraryName),
                format: "umd",
                sourcemap: true,
            },
        ],
        // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
        external: [...Object.keys(pkg.peerDependencies || {})],
        watch: {
            include: "src/**",
        },
        plugins: [
            // Allow json resolution
            json(),
            // Compile TypeScript files
            // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
            commonjs(),
            // Allow node_modules resolution, so you can use 'external' to control
            // which external modules to include in the bundle
            // https://github.com/rollup/rollup-plugin-node-resolve#usage
            resolve({ extensions }),

            babel({
                extensions,
                babelHelpers: "bundled",
                include: ["src/**/*"],
            }),
            // Resolve source maps to the original source
            sourceMaps(),

            terser(),
        ],
    },
];
