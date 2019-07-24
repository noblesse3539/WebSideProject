import React from 'react';
import TopNav from 'components/navbar/TopNav'
import Footer from 'components/footer/Footer'

import './Home.scss'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <TopNav/>
                <div className="aboutus-wrapper">
                    <div className="introduce lmk">
                        minkyo's pic & short quotes
                    </div>
                    <div className="introduce yco">
                        chango's pic & short quotes
                    </div>
                    <div className="introduce kbs">
                        byeongsuk's pic & short quotes
                    </div>
                    <div className="introduce ldm">
                        dongmyeong's pic & short quotes
                    </div>
                    <div className="introduce all">
                        we are webengers
                    </div>
                </div>
                <div className="course-button">
                    <button className="button">COURSES</button>
                </div>
                <Footer/>
            </div>
        );
    }
};