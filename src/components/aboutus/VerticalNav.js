import React from 'react'
import 'assets/sass/aboutus/VerticalNav.scss'

export default class VerticalNav extends React.Component {
    createVerticalNav = () => {
        console.log('createverticalnav')
        let nav = []
        console.log(this.props.pages)
        for (let i = 0; i < this.props.pages; i++) {
            nav.push(<div className="nav-circle"/>)
        }
        console.log(nav)
        return nav
    }
    render() {
        return (
            <div className="v-nav">
                {this.createVerticalNav()}
            </div>
        )
    }
}