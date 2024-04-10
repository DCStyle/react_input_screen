import React, { useState } from 'react';
import ChildInput from './ChildInput';

// Parent component
const InputScreen = () => {
	const [inputValue, setInputValue] = useState('');

	const updateInputValue = (newValue) => {
		setInputValue(newValue);
	};

	return (
		<div style={{ margin: '15em 20em', display: 'flex', flexDirection: 'column' }}>
			<div style={{ margin: '1em auto', fontSize: '18pt' }}>
				The input value is <b>{inputValue ?? 'blank'}</b>
			</div>
			<ChildInput updateInputValue={updateInputValue} />
		</div>
	);
};

export default InputScreen;