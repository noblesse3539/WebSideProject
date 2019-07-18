import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: AnswerConsumer } = Context;

class AnswerProvider extends Component {
    state = {
        answer: ''
    }
}