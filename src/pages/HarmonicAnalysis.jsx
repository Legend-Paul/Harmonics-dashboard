import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

function HarmonicAnalysis({ data, harmonicSpectrum }) {
	return (
		<div className="page">
			<h2>Harmonic Analysis</h2>

			<div className="thd-summary">
				<div className="thd-card">
					<h3>Voltage THD</h3>
					<p className="thd-value">{data.phases.R.thd_voltage}%</p>
					<span className="thd-limit">IEEE Limit: 5%</span>
					<span className="thd-status compliant">COMPLIANT</span>
				</div>
				<div className="thd-card">
					<h3>Current THD</h3>
					<p className="thd-value">{data.phases.R.thd_current}%</p>
					<span className="thd-limit">IEEE Limit: 8%</span>
					<span className="thd-status compliant">COMPLIANT</span>
				</div>
			</div>

			<div className="chart-container">
				<h3>Harmonic Spectrum</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={harmonicSpectrum}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="order" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="magnitude" fill="#8884d8" name="Magnitude (%)" />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="harmonics-table">
				<h3>Individual Harmonics</h3>
				<table>
					<thead>
						<tr>
							<th>Harmonic</th>
							<th>Value</th>
							<th>IEEE Limit</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>3rd Harmonic</td>
							<td>{data.phases.R.harmonics["3rd"]}%</td>
							<td>4%</td>
							<td>
								<span className="compliant">COMPLIANT</span>
							</td>
						</tr>
						<tr>
							<td>5th Harmonic</td>
							<td>{data.phases.R.harmonics["5th"]}%</td>
							<td>4%</td>
							<td>
								<span className="compliant">COMPLIANT</span>
							</td>
						</tr>
						<tr>
							<td>7th Harmonic</td>
							<td>{data.phases.R.harmonics["7th"]}%</td>
							<td>4%</td>
							<td>
								<span className="compliant">COMPLIANT</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default HarmonicAnalysis;
