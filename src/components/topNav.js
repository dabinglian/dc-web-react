import React from 'react'
import { render } from 'react-dom'
import { Menu, Breadcrumb, Icon, Switch } from 'antd'

export default class TopNav extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('/mock/topNav.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.value}) })
            .catch((e) => { console.log(e.message) })
    }

    componentDidMount() {
        this.fetchFn()
    }

    render() {
    	return (
            <div className="main-page">
        		<div className="topNav clearfix">
        			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                        {
                            this.state.lists.map((e) =>{
                                return (
                                    <Menu.Item appId={e.appId} resourceId={e.resourceId}>{e.projectName}</Menu.Item>
                                )
                            })
                        }
                    </Menu>
        		</div>
                <div className="pad20">
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    {this.props.children}
                </div>
            </div>
    	)
    }
}