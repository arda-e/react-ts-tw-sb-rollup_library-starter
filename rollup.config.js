import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
import { glob } from 'glob'

const excludeExtensions = [
    'test.js',
    'test.ts',
    'test.jsx',
    'test.tsx',
    'stories.js',
    'stories.ts',
    'stories.jsx',
    'stories.tsx',
  ];
  
  const inputFiles = [
    './src/index.ts',
    ...glob.sync('./src/**/*.{ts,tsx}', {
      ignore: excludeExtensions.map(ext => `**/*${ext}`),
    }),
  ];

export default {
    input: inputFiles,
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
    },
    plugins:[
        peerDeps(),
        resolve(),
        commonjs(),
        typescript({
          tsconfig: './tsconfig.build.json',
          declaration: true,
          declarationDir: 'dist',
        }),
        postcss({
          inject: false,
          config: './postcss.config.cjs', // Specify the updated config file
          plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }),
    ],
    external: ['react', 'react-dom'],
}