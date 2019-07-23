import React from 'react';
import TopNav from 'components/navbar/TopNav'
import Footer from 'components/footer/Footer'

import './Course.scss'

export default class Course extends React.Component {
    render() {
        return (
            <div>
                <TopNav/>
                <div className="aboutus-wrapper">
                    course
                </div>
                <div className="course-button">
                    <button className="button">COURSES</button>
                </div>
                <Footer/>
            </div>
        );
    }
};