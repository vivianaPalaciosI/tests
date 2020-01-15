import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import Home from './pages/home/home';
import Articles from './pages/articles/articles';


class App extends React.Component {
	render() {
		return (
			<div className="body">
				<div className="layout-container">
				<nav className="navbar">
				<a className="navbar-brand" href="/">News</a>
				</nav>
					<Router>
						<Route exact path="/" render={() => <Home />} /> 
						<Route exact path="/articles" render={(props) => <Articles {...props} />} /> 
					</Router>
				</div>
			</div>
		);
  	}
}
export default App;