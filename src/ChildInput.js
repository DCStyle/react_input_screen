import React, { useState } from 'react';
import ChildButton from './ChildButton';

const ChildInput = ({ updateInputValue }) => {
	const [localInputValue, setLocalInputValue] = useState('');

	const handleInputChange = (e) => {
		setLocalInputValue(e.target.value);
	};

	return (
		<div style={{margin: '1em auto', display: 'flex', flexDirection: 'column'}}>
			<input
				type='text'
				placeholder='Enter something...'
				value={localInputValue}
				onChange={handleInputChange}
				style={{padding: '.5rem 1rem', fontSize: '12pt'}}
			/>
			<ChildButton onClick={() => updateInputValue(localInputValue)} />
		</div>
	);
};

export default ChildInput;