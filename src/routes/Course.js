import React from 'react';
import TopNav from 'components/navbar/TopNav'
import Footer from 'components/footer/Footer'

import './Course.scss'

export default class Course extends React.Component {
    render() {
        return (
            <div>
                <TopNav/>
                <div className="course-wrapper">
                    <div className="course-flex">
                        <div className="course-box">

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
};