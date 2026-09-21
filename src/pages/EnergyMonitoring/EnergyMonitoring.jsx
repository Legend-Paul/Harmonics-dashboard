import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import "./EnergyMonitoring.css";

function EnergyMonitoring({ data, energyTrend }) {
	return (
		<div className="page">
			<h2>Energy Monitoring</h2>

			<div className="energy-cards">
				<div className="energy-card">
					<h3>Today</h3>
					<p className="energy-value">{data.energy.today_kwh} kWh</p>
					<p className="energy-cost">KSH {data.energy.today_cost_ksh}</p>
				</div>
				<div className="energy-card">
					<h3>This Week</h3>
					<p className="energy-value">{data.energy.week_kwh} kWh</p>
					<p className="energy-cost">KSH {data.energy.week_cost_ksh}</p>
				</div>
				<div className="energy-card">
					<h3>This Month</h3>
					<p className="energy-value">{data.energy.month_kwh} kWh</p>
					<p className="energy-cost">KSH {data.energy.month_cost_ksh}</p>
				</div>
			</div>

			<div className="chart-container">
				<h3>Energy Consumption Trend (Last 7 Days)</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={energyTrend}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="day" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="kwh" fill="#82ca9d" name="Energy (kWh)" />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="savings-card">
				<h3>Energy Savings</h3>
				<div className="savings-grid">
					<div className="savings-item">
						<span>Before Correction:</span>
						<span>{data.energy.month_kwh + data.energy.savings_kwh} kWh</span>
					</div>
					<div className="savings-item">
						<span>After Correction:</span>
						<span>{data.energy.month_kwh} kWh</span>
					</div>
					<div className="savings-item">
						<span>Savings:</span>
						<span className="savings-value">
							{data.energy.savings_kwh} kWh (10%)
						</span>
					</div>
					<div className="savings-item">
						<span>Cost Savings:</span>
						<span className="savings-value">
							KSH {data.energy.savings_cost_ksh}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EnergyMonitoring;
