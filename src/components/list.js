import React from 'react';

const List = ({ users }) =>
	<ul>
		{users.map((user, i) =>
			<li key={i}>{user}</li>
		)}
	</ul>

export default List;