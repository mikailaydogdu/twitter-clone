import React from 'react';

import SearchField from './SearchField';
import TrendingList from './TrendingList';

export default function RightSidebar() {
    return (
        <div className="rightSidebar col">
            <SearchField />
            <TrendingList />
        </div>
    );
}
