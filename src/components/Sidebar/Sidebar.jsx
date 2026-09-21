import "./Sidebar.css";
const menuItems = [
	{ id: "home", label: "Home", icon: "🏠" },
	{ id: "realtime", label: "Real-Time", icon: "📊" },
	{ id: "harmonic", label: "Harmonics", icon: "📈" },
	{ id: "energy", label: "Energy", icon: "⚡" },
	{ id: "status", label: "Status", icon: "🔔" },
	{ id: "settings", label: "Settings", icon: "⚙️" },
];

function Sidebar({ activePage, setActivePage }) {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<h2>ESP32 AHF</h2>
			</div>
			<nav className="sidebar-nav">
				{menuItems.map((item) => (
					<button
						key={item.id}
						className={`nav-item ${activePage === item.id ? "active" : ""}`}
						onClick={() => setActivePage(item.id)}
						data-label={item.label}
						title={item.label}
					>
						<span className="nav-icon">{item.icon}</span>
						<span className="nav-label">{item.label}</span>
					</button>
				))}
			</nav>
		</div>
	);
}

export default Sidebar;
