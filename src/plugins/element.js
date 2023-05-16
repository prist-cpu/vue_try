import Vue from 'vue'
import {
  Form,
  FormItem,
  Input,
  Button,
  Header,
  Container,
  Aside,
  Main,
  Row,
  Col,
  Submenu,
  Menu,
  MenuItemGroup,
  MenuItem,
  BreadcrumbItem,
  Breadcrumb,
  

} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)


Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
// 全局挂载message
Vue.prototype.$message = Message
