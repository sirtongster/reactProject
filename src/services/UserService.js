import React from 'react';
import axios from 'axios';

class UserService extends React.Component {
	componentDidMount(){
		console.log('mounted');
	}
	getUser(term){
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers:{
				Authorization: 'Client-ID 99dbbeac1c7b548fc047c5927d62b7ac8dbfb86a31278306f2c49ff3f7cca1c5'
			}
		});
	}
}

export default UserService;