import React from 'react';

import Notifications from './Notifications';
import LeftMenu from '../LeftMenu'
import TrendingList from '../TrendingList'
import SearchField from '../SearchField'

export default function NotificationsList() {
    return (
        <div className="loggedView">
            <div className="container">
                <div className="row">
                    <LeftMenu />
                    <div className="col-6">
                        <div class="main">
                            <div className="latestTweets">
                                <div className="latestTweets__title">
                                    <h2>Notifications</h2>
                                </div>
                                <div className="latestTweets__divisor" />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                                <Notifications />
                            </div>

                        </div>
                    </div>
                    <div className="rightSidebar col">
                        <SearchField />
                        <TrendingList />
                    </div>
                </div>
            </div>
        </div>
    )
}
