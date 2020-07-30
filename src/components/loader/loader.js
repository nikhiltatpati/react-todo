import React from 'react';

class Loader extends React.Component {
	render() {
		const divStyle = {
			position: 'absolute',
			backgroundColor: 'rgba(192,192,192,0.3)',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 1,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			textAlign: 'center'
		};
		return <div style={divStyle}>Loading...</div>;
	}
}

export default Loader;
