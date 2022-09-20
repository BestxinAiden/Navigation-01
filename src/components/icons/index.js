import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index'// svg组件

//将svg-icon注册为全局组件
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
//会扫描当前目录下的svg文件夹下所有后缀为.svg文件，并放置到req中
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)


