import React from 'react';

const ChildButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt'}}
		>
			Submit
		</button>
	);
};

export default ChildButton;