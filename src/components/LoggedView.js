import React from 'react';

import LeftMenu from './LeftMenu';
import RightSidebar from './RightSidebar';
import LatestTweets from './LatestTweets';

export default function LoggedView() {
    return (
        <div className="loggedView">
            <div className="container">
                <div className="row">
                    <LeftMenu />
                    <div className="col-6">
                        <div class="main">
                            <LatestTweets />
                        </div>
                    </div>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
}
