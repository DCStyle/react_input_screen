import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const InputScreen = () => {
    const [ inputValue, setInputValue ] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        setInputValue(formData.get('inputValue'));
    }

    return (
        <div style={{ margin: '15em 20em', display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: '1em auto', fontSize: '18pt' }}>
                The input value is <b>{inputValue ? inputValue : 'undefined'}</b>
            </div>

            <form
                onSubmit={handleFormSubmit}
                style={{margin: '1em auto', display: 'flex', flexDirection: 'column'}}>
                <input name="inputValue"
                       type='text'
                       placeholder='Enter something...'
                       style={{padding: '.5rem 1rem', fontSize: '12pt'}}
                />

                <button type='submit' value='submit'
                        style={{marginTop: '1rem', padding: '.5rem 0', fontSize: '12pt'}}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputScreen/>);