import React from 'react'
import { render } from 'react-dom'
import { Menu, Icon, Switch } from 'antd'
const { SubMenu } = Menu

export default class TopNav extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('/mock/sideNav.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.value}) })
            .catch((e) => { console.log(e.message) })
    }

    componentDidMount() {
        this.fetchFn()
    }

    render() {
    	return (
            <div className="bgWhite mt10 pt20 pb20 clearfix">
        		<div className="sideNav l clearfix">
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                        {
                            this.state.lists.map((items) =>{
                                return(
                                    <SubMenu key={items.id} title={<span>{items.name}</span>}>
                                        {
                                           items.children.map((e) =>{
                                                return(
                                                    <Menu.Item key={e.id}><a href={e.url}>{e.name}</a></Menu.Item>
                                                )
                                            }) 
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
        		</div>
                {this.props.children}
            </div>
    	)
    }
}