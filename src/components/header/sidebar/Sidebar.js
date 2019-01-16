import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Sidebar.scss';

class Sidebar extends React.Component{
	render(){
		const{
			open=false,
			toggleStatus
		}=this.props;
		return(
			<div className={`sidebar ${(open)?'open':''}`}>
				<div className="closer flex flex-row" onClick={ toggleStatus }>
					<button className="hamburger hamburger--squeeze is-active" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</div>
				<ul>
					<li><Link to="/" onClick={toggleStatus}>Home</Link></li>
					<li><Link to="/about/" onClick={toggleStatus}>About</Link></li>
					<li><Link to="/users/" onClick={toggleStatus}>Users</Link></li>
				</ul>
			</div>
		) 
	}
}

export default Sidebar;