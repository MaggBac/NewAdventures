import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
	return (
		<div className='card'>
			<div className='tag'>
				<p className='card--top'>
					<FontAwesomeIcon className='card--star' icon={faGlobe} />
					<span className='card--location'>{props.item.location}</span>
				</p>
				<a className='card--link' href={props.item.google} target="_blank">
					View on Google Maps
				</a>
			</div>
			<img src={`../images/${props.item.coverImg}`} className='card--image' />
			<h3>{props.item.title}</h3>
			<span className='card--date'>{props.item.date}</span>
			<p>{props.item.description}</p>
		</div>
	);
}
