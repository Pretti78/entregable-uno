import React, { useState } from 'react';
import quotes from '../quotes.json';

const QuoteBox = ({ color }) => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const [quote, setQuote] = useState(randomIndex);

	const changeQuote = () => {
		const randomNum = Math.floor(Math.random() * quotes.length);
		setQuote(randomNum);
	};

	return (
		<div className="card">
			<h1 className="wink" style={{ color: color }}>
				''
			</h1>
			<p className="text" style={{ color: color }}>
				{quotes[quote].quote}
			</p>
			<h2 className="author" style={{ color: color }}>
				{quotes[quote].author}
			</h2>
			<button className="button" onClick={changeQuote} style={{ color: color }}>
				next
			</button>
		</div>
	);
};

export default QuoteBox;
