import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const App = () => {
	const [data, setData] = useState({
		name: '',
		email: ''
	});
	const [response, setResponse] = useState({});

	const { name, email } = data;

	const handleChangeName = e => {
		setData({ ...data, name: e.target.value });
	};

	const handleChangeEmail = e => {
		setData({ ...data, email: e.target.value });
	};

	const postToEndpoint = async e => {
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		await axios
			.post(
				'https://cors-anywhere.herokuapp.com/https://ey8ola9nmf.execute-api.us-east-2.amazonaws.com/hiring',
				data,
				config
			)
			.then(res => {
				console.log(res.data);
				setResponse(res.data);
				console.log(response);
			});
	};

	return (
		<div className='App'>
			<form onSubmit={postToEndpoint}>
				<label htmlFor='name'>Name:</label>
				<input type='text' id='name' onChange={handleChangeName} value={name} />

				<label htmlFor='email'>Email:</label>
				<input type='email' id='email' onChange={handleChangeEmail} value={email} />

				<button>Submit</button>
			</form>
		</div>
	);
};

export default App;
