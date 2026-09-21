function SystemStatus({ data }) {
	return (
		<div className="page">
			<h2>System Status and Alerts</h2>

			<div className="status-card">
				<h3>System Status</h3>
				<div className="status-grid">
					<div className="status-item">
						<span>Harmonic Correction:</span>
						<span
							className={
								data.harmonic_correction.active ? "active" : "inactive"
							}
						>
							{data.harmonic_correction.active ? "ACTIVE" : "INACTIVE"}
						</span>
					</div>
					<div className="status-item">
						<span>Operating Mode:</span>
						<span>{data.mode.toUpperCase()}</span>
					</div>
					<div className="status-item">
						<span>Equipment Status:</span>
						<span className="normal">NORMAL</span>
					</div>
					<div className="status-item">
						<span>Last Correction:</span>
						<span>
							{new Date(
								data.harmonic_correction.last_correction,
							).toLocaleTimeString()}
						</span>
					</div>
				</div>
			</div>

			<div className="alerts-card">
				<h3>Active Alerts</h3>
				{data.alerts.length === 0 ? (
					<p className="no-alerts">
						No active alerts - System operating normally
					</p>
				) : (
					data.alerts.map((alert) => (
						<div key={alert.id} className={`alert-item ${alert.status}`}>
							<span className="alert-type">{alert.type}</span>
							<span className="alert-message">{alert.message}</span>
							<span className="alert-value">{alert.value}</span>
							<span className="alert-status">{alert.status}</span>
						</div>
					))
				)}
			</div>

			<div className="history-card">
				<h3>Alert History (Last 24 Hours)</h3>
				<table>
					<thead>
						<tr>
							<th>Time</th>
							<th>Alert Type</th>
							<th>Value</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{data.alerts.map((alert) => (
							<tr key={alert.id}>
								<td>{new Date(alert.timestamp).toLocaleTimeString()}</td>
								<td>{alert.type}</td>
								<td>{alert.value}</td>
								<td>
									<span className={alert.status}>{alert.status}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SystemStatus;
