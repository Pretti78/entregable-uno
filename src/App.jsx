import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
	const colorPalet = ['#D3BDB0', '#C1AE9F', '#89937C', '#715B64', '#69385C'];

	const randomColor = Math.floor(Math.random() * colorPalet.length);

	const color = colorPalet[randomColor];

	console.log(color);

	return (
		<div className="App" style={{ background: color }}>
			<QuoteBox color={color} />
		</div>
	);
}

export default App;
