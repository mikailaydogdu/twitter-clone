import React from 'react';
import { Search } from 'react-feather';

export default function SearchField() {
    return (
        <div className="searchFieldContainer">
            <input
                type="text"
                className="searchFieldContainer__input"
                placeholder="Search Twitter"
            />
            <div className="searchFieldIcon">
                <Search size="18" />
            </div>
            <div className="searchField__autocomplete">
                <span>Try searching for people, topics, or keywords.</span>
            </div>
        </div>
    );
}
