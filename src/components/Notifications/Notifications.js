import React from 'react';

import { Circle, MessageCircle, Repeat, Heart, Share } from 'react-feather';

export default function Notifications(props) {
    let { retweet = false, retweetMode = false } = props;
    return (
        <div className="tweetsContainer" style={{height: 70}}>
            <a href="/">
                {!retweetMode ? (
                    <div className="latestTweets__profilePic">
                        <Circle size="46" fill="darkgray" />
                    </div>
                ) : null}

                <div className="tweetsContainer__content">
                    <div className="tweetsContainer__name">
                        {retweetMode ? (
                            <div className="tweetsContainer__retweetPic">
                                <Circle size="19" fill="darkgray" />
                            </div>
                        ) : null}
                        <span className="name">Mikail Aydogdu</span>
                        <span className="handle">@MikailAydogduu</span>
                        <span className="spacer">·</span>
                        <span className="time">25m</span>
                    </div>

                    <div className="tweetsContainer__text">
                        Elon musk followed you
                    </div>

                    {retweet ? (
                        <div className="tweetsContainer__retweetContent">
                            <Notifications retweetMode={retweet} />
                        </div>
                    ) : null}

                  
                </div>
            </a>
        </div>
    );
}
