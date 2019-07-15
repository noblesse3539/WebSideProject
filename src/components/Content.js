import React from 'react';

import CardView from './CardView'

import '../assets/css/Content.css'

export default class Content extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <CardView />
                <CardView />
            </div>
        )
    }
}