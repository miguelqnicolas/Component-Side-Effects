import React, {useState, useEffect} from 'react';
import './App.css';
import axios from '../node_modules/axios';
import Image from './Image';
import Subtitle from './Subtitle';
import About from './About';

function App() {
	const [media, setMedia] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [about, setAbout] = useState('');
	// could i combine these states?
	
	// the data will change tomorrow
	// if i were to do a get request in each component would that count as three calls instead of one as seen here

	useEffect(() => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(response => {
			// console.log(response);
			setMedia(response.data.url);
			setSubtitle(response.data.title);
			setAbout(response.data.explanation);
		})
		.catch(error => {
			console.log('There was an error:', error);
		})
	}, []);

	return (
		<div className="App">
			<h1>NASA's Astronomy Media Of The Day</h1>
			<Image media={media}/>
			<Subtitle subtitle={subtitle}/>
			<About about={about}/>
			<p>Click here to see yesterday's AMOD!</p>
		</div>
	);
}

export default App;