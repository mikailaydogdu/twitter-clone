import React from 'react';
import {
    Home,
    Hash,
    Bell,
    Mail,
    Bookmark,
    List,
    Circle,
    MoreHorizontal,
    Twitter
} from 'react-feather';
import { NavLink } from 'react-router-dom';
export default function LeftMenu() {
    return (
        <div className="leftMenu col-2">
            <div className="nav">
                <NavLink className="nav__link" to="/">
                    <div className="nav__logo">
                        <Twitter
                            size="22"
                            fill="#FFF"
                            className="nav__logoSVG"
                        />
                    </div>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'nav__link--active nav__link' : 'nav__link')} to="/">
                    <div className="nav__group">
                        <Home size="21" />
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'nav__link--active nav__link' : 'nav__link')} to="/explore">
                    <div className="nav__group">
                        <Hash size="21" />
                        <span>Explore</span>
                    </div>
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'nav__link--active nav__link' : 'nav__link')} to="/notifications">
                    <div className="nav__group">
                        <Bell size="21" />
                        <span>Notifications</span>
                    </div>
                </NavLink>
                <a className="nav__link" href="/messages">
                    <div className="nav__group">
                        <Mail size="21" />
                        <span>Messages</span>
                    </div>
                </a>
                <a className="nav__link" href="/bookmarks">
                    <div className="nav__group">
                        <Bookmark size="21" />
                        <span>Bookmarks</span>
                    </div>
                </a>
                <a className="nav__link" href="/Lists">
                    <div className="nav__group">
                        <List size="21" />
                        <span>Lists</span>
                    </div>
                </a>
                <a className="nav__link" href="/Profile">
                    <div className="nav__group">
                        <Circle size="21" />
                        <span>Profile</span>
                    </div>
                </a>
                <a className="nav__link" href="/More">
                    <div className="nav__group">
                        <MoreHorizontal />
                        <span>More</span>
                    </div>
                </a>
                <a className="nav__link" href="/Tweet">
                    <div className="nav__button">
                        <span>Tweet</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
