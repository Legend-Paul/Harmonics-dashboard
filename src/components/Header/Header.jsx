import "./Header.css";
function Header({ data, setNavCollapsed, navCollapsed }) {
	const handleNavCollapsing = () => {
		setNavCollapsed((prev) => !prev);
	};
	return (
		<header
			className={`header ${!navCollapsed ? "collapsed-header" : "expanded-header"}`}
		>
			<div className="header-left">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					onClick={handleNavCollapsing}
				>
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
				<h1>Monitoring System</h1>
			</div>
			<div className="header-right">
				<span className={`status-badge ${data.status}`}>
					{data.status.toUpperCase()}
				</span>
				<span className="timestamp">
					{new Date(data.timestamp).toLocaleTimeString()}
				</span>
			</div>
		</header>
	);
}

export default Header;
