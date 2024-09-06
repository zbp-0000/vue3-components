// 用来整合组件的 最终实现导出组件
import { withInstall } from '@zi-shu/utils/with-install';

import _Icon from './src/icon.vue'

// import type { Plugin } from "vue"
// export type SFCWithInstall<T> = T & Plugin
// export function withInstall<T>(comp: T) {
//     (comp as SFCWithInstall<T>).install = function(app) {
//         const {name} = comp as unknown as {name:string}
//         app.component(name, comp) // 将组件注册为全局组件
//     }
//     return comp as SFCWithInstall<T>
// }

const Icon  = withInstall(_Icon)

export default Icon; // 可以通过app.use来使用，也可以通过 import方式单独使用

export * from './src/icon'

// 这里添加的类型可以在模板中被解析
declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
        ZIcon: typeof Icon
    }
}