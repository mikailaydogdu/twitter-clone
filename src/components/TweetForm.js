import React from 'react';

import { Image, Circle } from 'react-feather';

export default function TweetForm() {
    return (
        <div className="tweetField">
            <div className="tweetField__profilePic">
                <Circle size="46" fill="#FFF" />
            </div>
            <div className="tweetField__inputContainer">
                <div
                    className="tweetField__input"
                    contentEditable="true"
                    placeholder="What's happening?">
                    What's happening?
                </div>
                <div className="tweetField__options">
                    <div className="tweetField__tools">
                        <button className="tweetField__items">
                            <Image size="20" />
                        </button>
                    </div>
                    <div className="tweetField__submit">
                        <button className="tweetField__submitButton">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
