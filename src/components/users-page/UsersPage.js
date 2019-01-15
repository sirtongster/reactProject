import React from 'react';

import User from './user/User';

import faker from 'faker';
import './UsersPage.scss';

class UsersPage extends React.Component{
	state={
		user:{
			name:"",
			timeAgo:"",
			image:"",
			comments:""
		}
	}

	render(){
		return(
			<div className="users-page flex">
				<div className="ui container comments">
					<User
						name="Sam"
						timeAgo="Today at 4:45PM"
						image={faker.image.avatar()}
						comments={faker.lorem.sentence()}
					/>
					<User
						name="Jane"
						timeAgo="Today at 2:00AM"
						image={faker.image.avatar()}
						comments={faker.lorem.sentence()}
					/>
					<User
						name="Michael"
						timeAgo="Yesterday at 5:15PM"
						image={faker.image.avatar()}
						comments={faker.lorem.sentence()}
					/>
				</div>
			</div>
		) 
	}
}

export default UsersPage;