import React, { Component } from 'react';

import './SearchInput.css';


export default class SearchInput extends Component {

    state = {
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value.toLowerCase();
        this.setState({term});
        this.props.onSearchChange(this.state.term);
    }


    render(){
        return (
            <div className="todo-container">
                <div className="task-create">
                    <input type="text"
                         className="todo-input"
                         placeholder="Whats album do you search?"
                         onChange={this.onSearchChange} />
                </div>
            </div>
        );
    }
}