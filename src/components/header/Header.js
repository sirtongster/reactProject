import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';

import faker from 'faker';
import './Header.scss';

class Header extends React.Component{
	state = { open: false }

	toggleStatus=()=>{
		this.setState({open: !this.state.open});
	}

	render(){
		return(
			<div className="header flex flex-row">
				<div className="logo flex flex-1">
					<div className="image">
						<img src={faker.image.avatar()} alt="brand"/>
					</div>
					<div className="paths">
						<div className="menu" onClick={ this.toggleStatus }>
							<button class="hamburger hamburger--squeeze" type="button">
								<span class="hamburger-box">
									<span class="hamburger-inner"></span>
								</span>
							</button>
						</div>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about/">About</Link></li>
							<li><Link to="/users/">Users</Link></li>
						</ul>
					</div>
				</div>
				<div className="sidebar-wrapper">
					<Sidebar open={ this.state.open } toggleStatus={this.toggleStatus}/>
				</div>
			</div>
		) 
	}
}

export default Header;