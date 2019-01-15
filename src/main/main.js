import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Header from '../components/header/Header';
import Home from '../modules/home/home';
import About from '../modules/about/about';
import Users from '../modules/users/users';

const Main = () => (
	<Router>
		<section>
			<nav className="navigation">
				<Header />
			</nav>
			<Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
		</section>
	</Router>
);

export default Main;