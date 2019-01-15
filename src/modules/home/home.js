import React from 'react';

import HomePage from '../../components/home-page/HomePage';

class Home extends React.Component{
	render(){
		return(
			<div className="home">
				<div className="homepage-wrapper">
					<HomePage />
				</div>
			</div>
		) 
	}
}

export default Home;