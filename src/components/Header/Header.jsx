import "./Header.css";
function Header({ data }) {
	return (
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
	);
}

export default Header;
