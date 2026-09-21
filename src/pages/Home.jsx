import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

function Home({ data, voltageTrend }) {
	return (
		<div className="page">
			<div className="cards-grid">
				<div className="card">
					<h3>Voltage</h3>
					<p className="card-value">{data.phases.R.voltage} V</p>
					<span className="card-status normal">NORMAL</span>
				</div>
				<div className="card">
					<h3>Current</h3>
					<p className="card-value">{data.phases.R.current} A</p>
					<span className="card-status normal">NORMAL</span>
				</div>
				<div className="card">
					<h3>Power Factor</h3>
					<p className="card-value">{data.summary.average_power_factor}</p>
					<span className="card-status good">GOOD</span>
				</div>
				<div className="card">
					<h3>Active Power</h3>
					<p className="card-value">
						{(data.summary.total_active_power / 1000).toFixed(1)} kW
					</p>
					<span className="card-status normal">NORMAL</span>
				</div>
				<div className="card">
					<h3>Voltage THD</h3>
					<p className="card-value">{data.phases.R.thd_voltage}%</p>
					<span className="card-status good">GOOD</span>
				</div>
				<div className="card">
					<h3>Current THD</h3>
					<p className="card-value">{data.phases.R.thd_current}%</p>
					<span className="card-status good">GOOD</span>
				</div>
				<div className="card">
					<h3>Energy</h3>
					<p className="card-value">{data.energy.month_kwh} kWh</p>
					<span className="card-status normal">MONTH</span>
				</div>
				<div className="card">
					<h3>System Status</h3>
					<p className="card-value">
						{data.harmonic_correction.active ? "ACTIVE" : "INACTIVE"}
					</p>
					<span className="card-status good">ONLINE</span>
				</div>
			</div>

			<div className="chart-container">
				<h3>Voltage Trend (Last 1 Hour)</h3>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={voltageTrend}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="time" />
						<YAxis domain={[410, 420]} />
						<Tooltip />
						<Line type="monotone" dataKey="R" stroke="#ff0000" name="Phase R" />
						<Line type="monotone" dataKey="Y" stroke="#ffcc00" name="Phase Y" />
						<Line type="monotone" dataKey="B" stroke="#0000ff" name="Phase B" />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className="alerts-container">
				<h3>Alerts / Notifications</h3>
				{data.alerts.length === 0 ? (
					<p className="no-alerts">
						No active alerts - System operating normally
					</p>
				) : (
					data.alerts.map((alert) => (
						<div key={alert.id} className={`alert ${alert.status}`}>
							<span className="alert-message">{alert.message}</span>
							<span className="alert-value">{alert.value}</span>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default Home;
