import React from 'react';

let trends = [
    {
        id: '001',
        location: 'turkey',
        name: 'goodmorning',
        tweets: '33K'
    },
    {
        id: '002',
        location: 'turkey',
        name: 'blabla',
        tweets: '23K'
    },
    {
        id: '003',
        location: 'turkey',
        name: 'react',
        tweets: '21K'
    },
    {
        id: '004',
        location: 'turkey',
        name: 'elonmusk',
        tweets: '13K'
    },
    {
        id: '005',
        location: 'turkey',
        name: 'sdasdasd',
        tweets: '4K'
    }
];

export default function TrendingList() {
    return (
        <div className="trends">
            <div className="trends__title">
                <h2>Turkey Trends</h2>
            </div>
            <ul className="trends__list">
                {trends.map((item, index) => (
                    <li className="trends__item" key={item.id}>
                        <a href="/" className="trends__link">
                            <div className="trends__info">
                                {index + 1} · Trending {item.location}
                            </div>
                            <span className="trends__name">{item.name}</span>
                            <span className="trends__tweets">
                                {item.tweets} Tweets
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
