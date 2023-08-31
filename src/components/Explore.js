import React from 'react';

import LeftMenu from './LeftMenu';
import RightSidebar from './RightSidebar';
import LatestTweets from './LatestTweets';

export default function ExploreView() {
    return (
        <div className="loggedView">
            <div className="container">
                <div className="row">
                    <LeftMenu />
                    <div className="col-10">
                        <div class="main">
                        <RightSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
