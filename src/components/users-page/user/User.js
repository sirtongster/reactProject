import React from 'react';

import './User.scss';

class User extends React.Component{
	render(){
		const{
			image, name, timeAgo, comments
		}=this.props;
		
		return(
			<div className="user flex">
				<img src={image} alt="avatar"/>
				<div className="content">
					<a href="/" className="name">
						{name}
					</a>
					<div className="metadata">
						<span className="date">{timeAgo}</span>
					</div>
					<div className="text">{comments}</div>
				</div>
			</div>
		) 
	}
}

export default User;