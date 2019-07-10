import React from 'react';

class ChapterList extends React.Component {
    render() {
        const { basic } = this.props;

        return (
            <div>
                {basic[0].question}
            </div>
        )
    }
}

export default ChapterList;