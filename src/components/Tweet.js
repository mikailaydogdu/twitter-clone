import React from 'react';

import { Circle, MessageCircle, Repeat, Heart, Share } from 'react-feather';

export default function Tweet(props) {
    let { retweet = false, retweetMode = false } = props;
    return (
        <div className="tweetsContainer">
            {retweet ? (
                <div className="tweetsContainer__retweetTitle">
                    <div className="tweetsContainer__retweetIcon">
                        <Repeat size="12" color="#8899a6" />
                    </div>
                    <div className="tweetsContainer__retweetBy">
                        <a href="/">MikailAydogduu Retweeted</a>
                    </div>
                </div>
            ) : null}

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
                        Hello World
                    </div>

                    {retweet ? (
                        <div className="tweetsContainer__retweetContent">
                            <Tweet retweetMode={retweet} />
                        </div>
                    ) : null}

                    {!retweetMode ? (
                        <div className="tweetsContainer__options">
                            <div className="tweetsContainer__items">
                                <button className="comment">
                                    <MessageCircle size="16" />
                                </button>
                            </div>
                            <div className="tweetsContainer__items">
                                <button className="retweet">
                                    <Repeat size="16" />
                                </button>
                            </div>
                            <div className="tweetsContainer__items">
                                <button className="heart">
                                    <Heart size="16" />
                                </button>
                            </div>
                            <div className="tweetsContainer__items">
                                <button className="share">
                                    <Share size="16" />
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </a>
        </div>
    );
}
