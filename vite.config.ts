/*
 * @Author: wangshaokang wangshaokang@example.com
 * @Date: 2023-08-07 17:24:57
 * @LastEditors: wangshaokang wangshaokang@example.com
 * @LastEditTime: 2023-08-07 19:08:39
 * @FilePath: \vue-directive\vue-directive-sk\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 其他配置项...
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
