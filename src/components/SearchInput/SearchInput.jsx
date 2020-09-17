import React from 'react';

import './SearchInput.css';


const SearchInput = () => {
    return (
        <div class="todo-container">
            <div class="task-create">
                <input type="text" class="todo-input" placeholder="Whats album do you search?" />
            </div>
        </div>
    );
}


export default SearchInput;