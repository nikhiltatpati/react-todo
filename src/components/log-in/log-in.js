import React from 'react';
import { Button } from 'react-bootstrap';

export default class LogIn extends React.Component {
	render() {
		const { signInWithGoogle } = this.props;

		return (
			<div className='h-100 d-flex justify-content-center align-items-center text-center'>
				<div>
					<p className='pr-3'>Log in</p>
					<Button
						variant='outline-primary'
						size='sm'
						onClick={signInWithGoogle}
					>
						Sign in with Google
					</Button>
				</div>
			</div>
		);
	}
}
