import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { dummyData } from "../data/dummyData";

function RootLayout() {
	const [data, setData] = useState(dummyData);
	const [navCollapsed, setNavCollapsed] = useState(false);
	const location = useLocation();

	// Map URL paths to page IDs for sidebar active state
	const pathToPage = {
		"/": "home",
		"/realtime": "realtime",
		"/harmonic": "harmonic",
		"/energy": "energy",
		"/status": "status",
		"/settings": "settings",
	};
	const activePage = pathToPage[location.pathname] || "home";

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

	return (
		<div className="app">
			<Sidebar activePage={activePage} navCollapsed={navCollapsed} />
			<div
				className={`main-content ${!navCollapsed ? "collapsed-main-content" : "expanded-main-content"}`}
			>
				<Header
					data={data}
					setNavCollapsed={setNavCollapsed}
					navCollapsed={navCollapsed}
				/>
				<Outlet context={{ data }} />
			</div>
		</div>
	);
}

export default RootLayout;
