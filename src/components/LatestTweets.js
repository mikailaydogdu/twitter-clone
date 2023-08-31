import React from 'react';

import Tweet from './Tweet';
import TweetForm from './TweetForm';

export default function LatestTweets() {
    return (
        <div className="latestTweets">
            <div className="latestTweets__title">
                <h2>Home</h2>
            </div>
            <TweetForm />
            <div className="latestTweets__divisor" />
            <Tweet retweet={true} />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </div>
    );
}
