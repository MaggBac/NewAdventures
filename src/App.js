import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
	const info = data.map((item) => {
		return (
			<Card
				key={item.id}
				item={item}
			/>
		);
	});
	return (
		<div>
			<Nav />
			<Hero />
			{info}
		</div>
	);
}
