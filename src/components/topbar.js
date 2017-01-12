import React from 'react'
import { render } from 'react-dom'

export default class Topbar extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
    	return (
    		<div className="topbar clearfix">
    			<div className="l">
    				<div className="logo l">数据平台</div>
    				<div className="site-link l">
    					[<a href="#">权限系统</a>|<a href="#">意见反馈</a>]
    				</div>
    			</div>
    			<div className="l notice">
    			</div>
    			<div className="r">
    				<div className="username l">chenxiaowei</div>
    				[<a href="#">修改密码</a>]
    				<a href="#" className="logout">退出</a>
    			</div>
    		</div>
    	)
    }
}