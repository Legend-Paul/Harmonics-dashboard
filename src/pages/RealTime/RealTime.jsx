import "./RealTime.css";
function RealTime({ data }) {
	const phases = ["R", "Y", "B"];

	return (
		<div className="page">
			<h2>Real-Time Monitoring</h2>
			<div className="realtime-grid">
				{phases.map((phase) => (
					<div key={phase} className="phase-card">
						<h3>Phase {phase}</h3>
						<div className="phase-data">
							<div className="data-row">
								<span>Voltage:</span>
								<span>{data.phases[phase].voltage} V</span>
							</div>
							<div className="data-row">
								<span>Current:</span>
								<span>{data.phases[phase].current} A</span>
							</div>
							<div className="data-row">
								<span>Power Factor:</span>
								<span>{data.phases[phase].power_factor}</span>
							</div>
							<div className="data-row">
								<span>Active Power:</span>
								<span>
									{(data.phases[phase].active_power / 1000).toFixed(2)} kW
								</span>
							</div>
							<div className="data-row">
								<span>Reactive Power:</span>
								<span>
									{(data.phases[phase].reactive_power / 1000).toFixed(2)} kVAR
								</span>
							</div>
							<div className="data-row">
								<span>THD:</span>
								<span>{data.phases[phase].thd_current}%</span>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="summary-card">
				<h3>Summary</h3>
				<div className="summary-grid">
					<div className="summary-item">
						<span>Total Active Power:</span>
						<span>
							{(data.summary.total_active_power / 1000).toFixed(2)} kW
						</span>
					</div>
					<div className="summary-item">
						<span>Total Reactive Power:</span>
						<span>
							{(data.summary.total_reactive_power / 1000).toFixed(2)} kVAR
						</span>
					</div>
					<div className="summary-item">
						<span>Total Apparent Power:</span>
						<span>
							{(data.summary.total_apparent_power / 1000).toFixed(2)} kVA
						</span>
					</div>
					<div className="summary-item">
						<span>Average Power Factor:</span>
						<span>{data.summary.average_power_factor}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RealTime;
