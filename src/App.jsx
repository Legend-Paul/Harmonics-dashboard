import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import "./index.css";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import RealTime from "./pages/RealTime/RealTime";
import HarmonicAnalysis from "./pages/HarmonicAnalysis/HarmonicAnalysis";
import EnergyMonitoring from "./pages/EnergyMonitoring/EnergyMonitoring";
import SystemStatus from "./pages/SystemStatus/SystemStatus";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="realtime" element={<RealTime />} />
			<Route path="harmonic" element={<HarmonicAnalysis />} />
			<Route path="energy" element={<EnergyMonitoring />} />
			<Route path="status" element={<SystemStatus />} />
			<Route path="settings" element={<Settings />} />
			<Route path="*" element={<NotFound />} />
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
