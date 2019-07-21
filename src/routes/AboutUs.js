import React from 'react';
import VerticalNav from 'components/aboutus/VerticalNav'
import logo from 'assets/img/logo3.png'
import 'assets/sass/AboutUs.scss'

var timer
export default class AboutUs extends React.Component {
    state = {
        pages: 3,
    }
    pageCount = () => {
        this.state.pages = parseInt(document.querySelector('.main-wrapper').clientHeight / window.innerHeight)
    }
    pageScroll = (e) => {
        if (!timer) {
            let y = e.deltaY
            let h = window.innerHeight
            if (y > 0)  window.scrollBy(0, h)
            else        window.scrollBy(0, -h)
            timer = setTimeout(function() {
                timer = null
            }, 500)
        }
    }
    componentDidMount() {
        window.addEventListener('wheel', this.pageScroll)
        this.pageCount()
    }
    render() {
        return (
            <div>
                <div className="body-wrapper">
                    <div className="section sec-1">
                        <img src={logo} className="logo" alt="webengers-logo"/>
                        <div className="content">
                            <h1>Creative & Passionate</h1>
                            <h1>Web Developers</h1>
                        </div>
                    </div>
                    <div className="section sec-2">
                        <div className="content">
                        2
                        </div>
                    </div>
                    <div className="section sec-3">
                        <div className="content">
                        3    
                        </div>
                    </div>
                </div>
                <VerticalNav pages={this.state.pages}/>
            </div>
        )
    }

}
