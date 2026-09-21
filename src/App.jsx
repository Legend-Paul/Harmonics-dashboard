import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import RealTime from "./pages/RealTime";
import HarmonicAnalysis from "./pages/HarmonicAnalysis";
import EnergyMonitoring from "./pages/EnergyMonitoring";
import SystemStatus from "./pages/SystemStatus";
import Settings from "./pages/Settings";
import {
	dummyData,
	voltageTrend,
	energyTrend,
	harmonicSpectrum,
} from "./data/dummyData";

function App() {
	const [activePage, setActivePage] = useState("home");
	const [data, setData] = useState(dummyData);
	const [loading, setLoading] = useState(false);

	// Simulate ESP32 data updates every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setData({
				...dummyData,
				timestamp: new Date().toISOString(),
				phases: {
					R: {
						...dummyData.phases.R,
						voltage: (415 + Math.random() * 4 - 2).toFixed(1),
						current: (25 + Math.random() * 2 - 1).toFixed(1),
						thd_voltage: (2.8 + Math.random() * 0.4 - 0.2).toFixed(1),
						thd_current: (3.5 + Math.random() * 0.4 - 0.2).toFixed(1),
					},
					Y: {
						...dummyData.phases.Y,
						voltage: (414 + Math.random() * 4 - 2).toFixed(1),
						current: (25.5 + Math.random() * 2 - 1).toFixed(1),
						thd_voltage: (2.9 + Math.random() * 0.4 - 0.2).toFixed(1),
						thd_current: (3.6 + Math.random() * 0.4 - 0.2).toFixed(1),
					},
					B: {
						...dummyData.phases.B,
						voltage: (416 + Math.random() * 4 - 2).toFixed(1),
						current: (25.2 + Math.random() * 2 - 1).toFixed(1),
						thd_voltage: (2.7 + Math.random() * 0.4 - 0.2).toFixed(1),
						thd_current: (3.4 + Math.random() * 0.4 - 0.2).toFixed(1),
					},
				},
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const renderPage = () => {
		switch (activePage) {
			case "home":
				return <Home data={data} voltageTrend={voltageTrend} />;
			case "realtime":
				return <RealTime data={data} />;
			case "harmonic":
				return (
					<HarmonicAnalysis data={data} harmonicSpectrum={harmonicSpectrum} />
				);
			case "energy":
				return <EnergyMonitoring data={data} energyTrend={energyTrend} />;
			case "status":
				return <SystemStatus data={data} />;
			case "settings":
				return <Settings />;
			default:
				return <Home data={data} voltageTrend={voltageTrend} />;
		}
	};

	return (
		<div className="app">
			<Sidebar activePage={activePage} setActivePage={setActivePage} />
			<div className="main-content">
				<header className="header">
					<h1>Smart Energy Monitoring System</h1>
					<div className="header-right">
						<span className={`status-badge ${data.status}`}>
							{data.status.toUpperCase()}
						</span>
						<span className="timestamp">
							{new Date(data.timestamp).toLocaleTimeString()}
						</span>
					</div>
				</header>
				{renderPage()}
			</div>
		</div>
	);
}

export default App;
