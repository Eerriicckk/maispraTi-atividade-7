import logo from './logo.svg';
import './App.css';
import Numero1 from './components/Numero1';
import Numero2 from './components/Numero2';
import Numero3 from './components/Numero3';
import Numero4 from './components/Numero4';
import Numero5 from './components/Numero5';
import Numero6 from './components/Numero6';
import Numero7 from './components/Numero7';
import Numero8 from './components/Numero8';
import Numero9 from './components/Numero9';
import Numero10 from './components/Numero10';
import Button from './components/Button';
import { useState } from 'react';
import CustomTab from './components/CustomTab';

function App() {
	const [activeTab, setActiveTab] = useState(1);
	const [itens] = useState([
		{ name: "1", id: 1 },
		{ name: "2", id: 2 },
		{ name: "3", id: 3 },
		{ name: "4", id: 4 },
		{ name: "5", id: 5 },
		{ name: "6", id: 6 },
		{ name: "7", id: 7 },
		{ name: "8", id: 8 },
		{ name: "9", id: 9 },
		{ name: "10", id: 10 },
	])

	return (
		<div style={{ height: "100%" }}>
			<div className="d-flex flex-row justify-content-evenly mw-50 mx-auto">
				{itens.map((item, key) => (
					<Button key={key} onClick={() => setActiveTab(item.id)} style={{ border: "none", backgroundColor: (item.id === activeTab ? "lightgreen" : "green") }}>{item.name}</Button>
				))}
			</div>
			<div style={{ width: "90%", height: "700px", margin: "auto", textAlign: "center", marginTop: "15px" }}>
				<CustomTab tabId={1} activeTab={activeTab}>
					<Numero1 />
				</CustomTab>
				<CustomTab tabId={2} activeTab={activeTab}>
					<Numero2 />
				</CustomTab>
				<CustomTab tabId={3} activeTab={activeTab}>
					<Numero3 />
				</CustomTab>
				<CustomTab tabId={4} activeTab={activeTab}>
					<Numero4 />
				</CustomTab>
				<CustomTab tabId={5} activeTab={activeTab}>
					<Numero5 />
				</CustomTab>
				<CustomTab tabId={6} activeTab={activeTab}>
					<Numero6 />
				</CustomTab>
				<CustomTab tabId={7} activeTab={activeTab}>
					<Numero7 />
				</CustomTab>
				<CustomTab tabId={8} activeTab={activeTab}>
					<Numero8 />
				</CustomTab>
				<CustomTab tabId={9} activeTab={activeTab}>
					<Numero9 />
				</CustomTab>
				<CustomTab tabId={10} activeTab={activeTab}>
					<Numero10 />
				</CustomTab>
			</div>
		</div>
	);
}

export default App;
