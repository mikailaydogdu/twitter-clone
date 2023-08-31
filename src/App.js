import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import LoggedView from './components/LoggedView';
import ExploreView from './components/Explore'
import NotificationsList from './components/Notifications/NotificationsList';
import './styles.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<LoggedView />} />
        <Route path="/explore" element={<ExploreView />} />
        <Route path="/notifications" element={<NotificationsList />} />

      </Routes>

    </Router>
  );

}

export default App;
