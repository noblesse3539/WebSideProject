import React from 'react';

import CardView from './CardView'

import '../assets/sass/Content.scss'

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