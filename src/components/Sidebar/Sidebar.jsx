import "./Sidebar.css";

const menuItems = [
	{
		id: "home",
		label: "Home",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M3 10L12 3l9 7v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />
			</svg>
		),
	},
	{
		id: "realtime",
		label: "Real-Time",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M3 3v18h18" />
				<path d="M7 14l4-4 3 3 5-6" />
			</svg>
		),
	},
	{
		id: "harmonic",
		label: "Harmonics",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M2 12c2 0 2-6 4-6s2 12 4 12 2-12 4-12 2 6 4 6h4" />
			</svg>
		),
	},
	{
		id: "energy",
		label: "Energy",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M13 2L3 14h8l-1 8 10-12h-8z" />
			</svg>
		),
	},
	{
		id: "status",
		label: "Status",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
				<path d="M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		),
	},
	{
		id: "settings",
		label: "Settings",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="12" cy="12" r="3" />
				<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
			</svg>
		),
	},
];

function Sidebar({ activePage, setActivePage, navCollapsed }) {
	return (
		<div
			className={`sidebar ${navCollapsed ? "collapsed-sidebar" : "expanded-sidebar"}`}
		>
			<div className="sidebar-header">
				<h2>ESP32 AHF</h2>
			</div>
			<nav className="sidebar-nav">
				{menuItems.map((item) => (
					<button
						key={item.id}
						type="button"
						className={`nav-item ${activePage === item.id ? "active" : ""}`}
						onClick={() => setActivePage(item.id)}
						data-label={item.label}
						title={item.label}
						aria-current={activePage === item.id ? "page" : undefined}
					>
						<span className="nav-icon" aria-hidden="true">
							{item.icon}
						</span>
						<span className="nav-label">{item.label}</span>
					</button>
				))}
			</nav>
		</div>
	);
}

export default Sidebar;
