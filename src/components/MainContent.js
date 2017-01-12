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

    render() {
    	return (
            <div className="main-content">
                main content
            </div>
    	)
    }
}