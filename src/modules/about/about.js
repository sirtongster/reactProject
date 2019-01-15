import React from 'react';

import AboutPage from '../../components/about-page/AboutPage';

class About extends React.Component{
	render(){
		return(
			<div className="about">
				<div className="aboutpage-wrapper">
					<AboutPage />
				</div>
			</div>
		) 
	}
}

export default About;