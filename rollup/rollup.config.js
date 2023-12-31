/* 导入各种插件 */
// import resolve from '@rollup/plugin-node-resolve';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import autoExternal from 'rollup-plugin-auto-external';
import json from '@rollup/plugin-json';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
// import { polyfill } from 'rollup-plugin-polyfill-node';
// import { nodePolyfills } from '@rollup/plugin-node-polyfills';
import sass from 'rollup-plugin-sass'
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"

import vue from 'rollup-plugin-vue';
// import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-copy';

/* 导出配置对象 */
export default {

  // 入口文件路径
  input: 'src/index.ts',

  /* 定义输出位置 */
  output: {
    file: 'dist/bundle.es.js', // 输出文件路径（ES格式）
    format: 'es', // 输出模块格式 cjs esm iife
    sourcemap: true, // 生成源映射文件
  },

  /* 插件 */
  plugins: [

    /* 别名识别 */
    // resolve({
    //   // 在 resolve 插件的配置中定义别名
    //   alias: {
    //     '@': './src', // 以 @ 开头的模块包名映射到 './src' 文件夹下
    //   }
    // }),

    /* vue插件 */
    vue({
      // 设置 `normalizer` 选项为 `true`，以确保指令被正确编译和打包
      normalizer: '~vue-runtime-helpers/dist/normalize-component.js'
    }),

    /* 优化外部依赖：一个天坑！ */
    // peerDepsExternal(), // 外部化peer依赖
    // autoExternal(),

    /* 基本配置 */
    nodeResolve({
      browser: true,
      // 在 resolve 插件的配置中定义别名
      alias: {
        '@': './src', // 以 @ 开头的模块包名映射到 './src' 文件夹下
      }
    }), // 解析模块路径（浏览器环境）

    commonjs(), // 将CommonJS模块转换为ES模块
    json(),
    // nodePolyfills(), // 转换Node.js核心模块

    /* TS + BABEL + POSTCSS */
    typescript({
      declaration: true, // 输出类型声明文件
      declarationDir: 'dist', // 类型声明文件的输出目录
      
      // sourceMap: true,
      // inlineSources: true,
    }), // 处理TypeScript

    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // Babel转换要排除的文件夹
    }),

    postcss(), // 处理CSS

    sass({ output: 'dist/index.css' }),

    // url(),

    /* 优化外部依赖 */
    excludeDependenciesFromBundle(),

    /* 文件拷贝 */
    copy({
      targets: [
        // 指定要复制的文件或目录
        { src: 'rollup/package.json', dest: 'dist' },
      ],

      // 可选配置:
      // 如果设置为 true，则执行文件覆盖操作
      // 默认为 false，即不覆盖已存在的文件
      copyOnce: true,
    }),


  ],

};