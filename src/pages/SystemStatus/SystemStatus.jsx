import { useState } from "react";
import "./SystemStatus.css";

function SystemStatus({ data }) {
	const [filter, setFilter] = useState("all");

	const filteredAlerts = data.alerts.filter((alert) => {
		if (filter === "all") return true;
		return alert.status === filter;
	});

	const reductionPercentage = (
		((data.harmonic_correction.thd_before -
			data.harmonic_correction.thd_after) /
			data.harmonic_correction.thd_before) *
		100
	).toFixed(1);

	return (
		<div className="page">
			<div className="page-header">
				<h2>System Status and Alerts</h2>
				<span className={`status-badge ${data.status}`}>
					{data.status.toUpperCase()}
				</span>
			</div>

			{/* System Health Cards */}
			<div className="status-cards-grid">
				<div className="status-card">
					<div className="status-card-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M13 2L3 14h8l-1 8 10-12h-8z" />
						</svg>
					</div>
					<div className="status-card-content">
						<h3>Harmonic Correction</h3>
						<p
							className={
								data.harmonic_correction.active ? "active" : "inactive"
							}
						>
							{data.harmonic_correction.active ? "ACTIVE" : "INACTIVE"}
						</p>
					</div>
				</div>

				<div className="status-card">
					<div className="status-card-icon">
						<svg
							width="24"
							height="24"
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
					</div>
					<div className="status-card-content">
						<h3>Operating Mode</h3>
						<p>{data.mode.toUpperCase()}</p>
					</div>
				</div>

				<div className="status-card">
					<div className="status-card-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
							<polyline points="22 4 12 14.01 9 11.01" />
						</svg>
					</div>
					<div className="status-card-content">
						<h3>Equipment Status</h3>
						<p className="normal">NORMAL</p>
					</div>
				</div>

				<div className="status-card">
					<div className="status-card-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
					</div>
					<div className="status-card-content">
						<h3>Last Correction</h3>
						<p>
							{new Date(
								data.harmonic_correction.last_correction,
							).toLocaleTimeString()}
						</p>
					</div>
				</div>
			</div>

			{/* Correction Statistics */}
			<div className="correction-stats">
				<h3>Correction Performance</h3>
				<div className="stats-grid">
					<div className="stat-item">
						<span className="stat-label">THD Before Correction</span>
						<span className="stat-value warning">
							{data.harmonic_correction.thd_before}%
						</span>
					</div>
					<div className="stat-item">
						<span className="stat-label">THD After Correction</span>
						<span className="stat-value success">
							{data.harmonic_correction.thd_after}%
						</span>
					</div>
					<div className="stat-item">
						<span className="stat-label">Compensation Current</span>
						<span className="stat-value">
							{data.harmonic_correction.compensation_current} A
						</span>
					</div>
					<div className="stat-item">
						<span className="stat-label">Reduction Achieved</span>
						<span className="stat-value success">{reductionPercentage}%</span>
					</div>
				</div>
			</div>

			{/* Alerts Section */}
			<div className="alerts-section">
				<div className="section-header">
					<h3>Alert History</h3>
					<div className="filter-buttons">
						<button
							className={filter === "all" ? "active" : ""}
							onClick={() => setFilter("all")}
						>
							All
						</button>
						<button
							className={filter === "active" ? "active" : ""}
							onClick={() => setFilter("active")}
						>
							Active
						</button>
						<button
							className={filter === "resolved" ? "active" : ""}
							onClick={() => setFilter("resolved")}
						>
							Resolved
						</button>
					</div>
				</div>

				{filteredAlerts.length === 0 ? (
					<div className="no-alerts-box">
						<span className="no-alerts-icon">
							<svg
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
								<polyline points="22 4 12 14.01 9 11.01" />
							</svg>
						</span>
						<p>No alerts found - System operating normally</p>
					</div>
				) : (
					<table className="alerts-table">
						<thead>
							<tr>
								<th>Time</th>
								<th>Alert Type</th>
								<th>Message</th>
								<th>Value</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{filteredAlerts.map((alert) => (
								<tr key={alert.id}>
									<td>{new Date(alert.timestamp).toLocaleTimeString()}</td>
									<td className="alert-type-cell">
										<span className={`alert-type-badge ${alert.type}`}>
											{alert.type.replace("_", " ").toUpperCase()}
										</span>
									</td>
									<td>{alert.message}</td>
									<td className="alert-value-cell">{alert.value}</td>
									<td>
										<span className={`status-pill ${alert.status}`}>
											{alert.status.toUpperCase()}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default SystemStatus;
