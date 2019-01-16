import React from 'react';
import axios from 'axios';

// import UserService from '../../services/UserService';
import User from './user/User';

import faker from 'faker';
import './UsersPage.scss';

class UsersPage extends React.Component{
	state={
		users:[{
			name:"",
			timeAgo:"",
			image:"",
			comments:""
		}]
	}

	async componentDidMount(){
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: 'cars' },
			headers:{
				Authorization: 'Client-ID 99dbbeac1c7b548fc047c5927d62b7ac8dbfb86a31278306f2c49ff3f7cca1c5'
			}
		});
		const photos = response.data.results;
		this.setState({
			users:photos.map((x, i)=>({
				name: x.description,
				timeAgo: x.created_at,
				image: x.urls.thumb,
				comments: x.slug
			}))
		})		
	}

	render(){
		return(
			<div className="users-page flex">
				<div className="ui container comments">
				{ this.state.users.map(x=>
					<User
						name={x.name}
						timeAgo={x.timeAgo}
						image={x.image}
						comments={x.comment}
					/>
				)}
				</div>
			</div>
		) 
	}
}

export default UsersPage;