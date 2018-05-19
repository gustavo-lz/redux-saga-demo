import React from 'react';

const List = ({ users }) =>
	<ul>
		{users.map((user, i) =>
			<li key={i}>
        <img src={user.avatar} alt=''/>
        { user.first_name + user.last_name }</li>
		)}
	</ul>

export default List;