import React from 'react';
import MarkDownSlate from '../components/useslate/MarkDownSlate'

export default class Markdown extends React.Component {
    state = {
        text: ""
    }
    handleChange = (e) => {
        console.log(e.target.value[0])
        const showDiv = document.getElementById('show')
        if (e.target.value[0] === '#') {
            showDiv.style.fontSize = '50px';
            showDiv.style.fontWeight = '700';
            this.setState({
                text: e.target.value
            })
        } else {
            showDiv.style.fontSize = '1rem';
            showDiv.style.fontWeight = '500';
            this.setState({
                text: e.target.value
            })
        }
        
    }
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: "end",
                }}
            >
                <h1>Markdown Editor</h1>
                
                <textarea
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <div id="show">{this.state.text}</div>
                
                <MarkDownSlate/>
            </div>
        );
    }
};