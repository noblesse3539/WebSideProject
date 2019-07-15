import React from 'react';
import PropTypes from 'prop-types';

/*
    Stateless Presentation Component
    단순히 Question만 보여주는 간단한 컴포넌트.
    content는 Container Component를 통해 가져오도록 한다.
*/
function Question(props) {
    return (
        <h2 className="question">
            {props.content}
        </h2>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Question;