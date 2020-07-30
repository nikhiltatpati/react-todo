import React from 'react';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
	render() {
		const { user, signOut } = this.props;

		return (
			<div className='d-flex border-light border d-flex justify-content-center align-items-center py-3'>
				<span className='pr-3'>
					Hello <b>{user.displayName}</b>
				</span>

				<Button variant='outline-primary' size='sm' onClick={signOut}>
					Sign out
				</Button>
			</div>
		);
	}
}
