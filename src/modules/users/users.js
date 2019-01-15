import React from 'react';

import UsersPage from '../../components/users-page/UsersPage';

class Users extends React.Component{
	render(){
		return(
			<div className="users">
				<div className="userspage-wrapper">
					<UsersPage />
				</div>
			</div>
		) 
	}
}

export default Users;