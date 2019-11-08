import React, {useState, useEffect} from 'react';
import './App.css';
import axios from '../node_modules/axios';
import Media from './Media';
import Subtitle from './Subtitle';
import About from './About';
import Button from './Button';

function App() {
	let moment = require('moment');
	// try using moment with state?
	
	const [media, setMedia] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [about, setAbout] = useState('');
	const [day, setDay] = useState(8);

	useEffect(() => {
		axios.get(`https://api.nasa.gov/planetary/apod?api_key=an2hKOOCRRNYaVCvBfvTauWZHiD0ahdZBBR1ZCGS&date=2019-11-${day}`)
		.then(response => {
			setMedia(response.data.url);
			setSubtitle(response.data.title);
			setAbout(response.data.explanation);
		})
		.catch(error => {
			console.log('There was an error:', error);
		})
	}, [day]);

	return (
		<div className='App'>
			<div className='logo'>
				<img src='./favicon.png' alt='logo'></img>
				<h2>NASA's Astronomy Media of the Day</h2>
			</div>
			<Media media={media}/>
			<Subtitle subtitle={subtitle}/>
			<About about={about}/>
			<Button day={day} setDay={setDay}/>
		</div>	
	);
}

export default App;