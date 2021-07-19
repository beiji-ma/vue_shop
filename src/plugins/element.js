import Vue from 'vue'
import {
    Aside, 
    Breadcrumb,
    BreadcrumbItem, 
    Button, 
    Card, 
    Cascader,
    Col, 
    Container,
    Dialog,
    Form, 
    FormItem,
    Header, 
    Input,
    Main, 
    Menu, 
    MenuItem, 
    MenuItemGroup, 
    Message,
    MessageBox,
    Option,
    Pagination,
    Row, 
    Select,
    Submenu, 
    Switch, 
    Table, 
    TableColumn, 
    Tag,
    Tree,
    Tooltip
} from 'element-ui'

Vue.use(Aside)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Card)
Vue.use(Cascader)
Vue.use(Col)
Vue.use(Container)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Header)
Vue.use(Input)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Select)
Vue.use(Submenu)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Tooltip)
Vue.use(Tree)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
