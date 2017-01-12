/**
 * 
 * @authors chenxiaowei
 * @date    2017-01-12
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Layout, Header, Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './assets/css/core.css'
import './assets/css/main.css'

// 引入页面各组件
import Topbar from "./components/topbar.js"
import TopNav from "./components/topNav.js"
import SideNav from "./components/sideNav.js"
import MainContent from "./components/MainContent.js"

// 配置主页面框架
class Main extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    render() {
    	return (
    		<div className="page-wrapper">
    			<Topbar />
    			<TopNav>
    				<SideNav>
    					{this.props.children}
    				</SideNav>
    			</TopNav>
    		</div>
    	)
    }
}

class EmptyContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="empty-content">
                这里空空如也
            </div>
        )
    }
}

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Main}>
            <IndexRoute path="/" component={EmptyContent} />
            <Route path="/:moduleName/:id" component={MainContent} />
        </Route>
    </Router>
), document.getElementById('app'));