import { useState } from "react";
import "./Settings.css";

function Settings() {
	const [settings, setSettings] = useState({
		voltageThdLimit: 5,
		currentThdLimit: 8,
		overvoltageThreshold: 440,
		undervoltageThreshold: 350,
		overcurrentThreshold: 90,
		overtemperatureThreshold: 80,
		dataUpdateRate: 1,
		dataLoggingInterval: 5,
		autoCorrection: true,
		emailAlerts: false,
	});

	const [saved, setSaved] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setSettings({
			...settings,
			[name]: type === "checkbox" ? checked : Number(value) || value,
		});
		setSaved(false);
	};

	const handleSave = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 3000);
	};

	const handleReset = () => {
		setSettings({
			voltageThdLimit: 5,
			currentThdLimit: 8,
			overvoltageThreshold: 440,
			undervoltageThreshold: 350,
			overcurrentThreshold: 90,
			overtemperatureThreshold: 80,
			dataUpdateRate: 1,
			dataLoggingInterval: 5,
			autoCorrection: true,
			emailAlerts: false,
		});
		setSaved(false);
	};

	const handleExport = () => {
		const dataStr = JSON.stringify(settings, null, 2);
		const blob = new Blob([dataStr], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "system-settings.json";
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="page">
			<div className="page-header">
				<h2>Configuration and Settings</h2>
				{saved && <span className="save-indicator">Settings Saved</span>}
			</div>

			{/* THD Thresholds */}
			<div className="settings-card">
				<h3>Harmonic Thresholds</h3>
				<p className="settings-description">
					Set the Total Harmonic Distortion limits for automatic correction
					activation.
				</p>
				<div className="settings-grid">
					<div className="setting-item">
						<label>Voltage THD Limit (%)</label>
						<input
							type="number"
							name="voltageThdLimit"
							value={settings.voltageThdLimit}
							onChange={handleChange}
							min="0"
							max="20"
							step="0.5"
						/>
						<span className="setting-hint">IEEE 519 default: 5%</span>
					</div>

					<div className="setting-item">
						<label>Current THD Limit (%)</label>
						<input
							type="number"
							name="currentThdLimit"
							value={settings.currentThdLimit}
							onChange={handleChange}
							min="0"
							max="30"
							step="0.5"
						/>
						<span className="setting-hint">IEEE 519 default: 8%</span>
					</div>
				</div>
			</div>

			{/* Alert Settings */}
			<div className="settings-card">
				<h3>Alert Thresholds</h3>
				<p className="settings-description">
					Configure the values that trigger alerts for the protection system.
				</p>
				<div className="settings-grid">
					<div className="setting-item">
						<label>Overvoltage Threshold (V)</label>
						<input
							type="number"
							name="overvoltageThreshold"
							value={settings.overvoltageThreshold}
							onChange={handleChange}
							min="400"
							max="500"
						/>
					</div>

					<div className="setting-item">
						<label>Undervoltage Threshold (V)</label>
						<input
							type="number"
							name="undervoltageThreshold"
							value={settings.undervoltageThreshold}
							onChange={handleChange}
							min="300"
							max="400"
						/>
					</div>

					<div className="setting-item">
						<label>Overcurrent Threshold (% of rated)</label>
						<input
							type="number"
							name="overcurrentThreshold"
							value={settings.overcurrentThreshold}
							onChange={handleChange}
							min="50"
							max="150"
						/>
					</div>

					<div className="setting-item">
						<label>Overtemperature Threshold (°C)</label>
						<input
							type="number"
							name="overtemperatureThreshold"
							value={settings.overtemperatureThreshold}
							onChange={handleChange}
							min="40"
							max="120"
						/>
					</div>
				</div>
			</div>

			{/* System Settings */}
			<div className="settings-card">
				<h3>System Settings</h3>
				<p className="settings-description">
					Configure data update rates and system behavior.
				</p>
				<div className="settings-grid">
					<div className="setting-item">
						<label>Data Update Rate (seconds)</label>
						<input
							type="number"
							name="dataUpdateRate"
							value={settings.dataUpdateRate}
							onChange={handleChange}
							min="1"
							max="60"
						/>
						<span className="setting-hint">
							How often the dashboard refreshes
						</span>
					</div>

					<div className="setting-item">
						<label>Data Logging Interval (minutes)</label>
						<input
							type="number"
							name="dataLoggingInterval"
							value={settings.dataLoggingInterval}
							onChange={handleChange}
							min="1"
							max="60"
						/>
						<span className="setting-hint">
							How often data is stored in database
						</span>
					</div>
				</div>

				<div className="toggle-group">
					<div className="toggle-item">
						<div className="toggle-info">
							<label>Automatic Harmonic Correction</label>
							<span className="toggle-hint">
								Enable or disable automatic activation of the H-Bridge when THD
								exceeds limits
							</span>
						</div>
						<label className="switch">
							<input
								type="checkbox"
								name="autoCorrection"
								checked={settings.autoCorrection}
								onChange={handleChange}
							/>
							<span className="slider"></span>
						</label>
					</div>

					<div className="toggle-item">
						<div className="toggle-info">
							<label>Email Alerts</label>
							<span className="toggle-hint">
								Send email notifications when critical alerts are triggered
							</span>
						</div>
						<label className="switch">
							<input
								type="checkbox"
								name="emailAlerts"
								checked={settings.emailAlerts}
								onChange={handleChange}
							/>
							<span className="slider"></span>
						</label>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="settings-actions">
				<button className="btn-primary" onClick={handleSave}>
					Save Settings
				</button>
				<button className="btn-secondary" onClick={handleReset}>
					Reset to Default
				</button>
				<button className="btn-secondary" onClick={handleExport}>
					Export Data
				</button>
			</div>
		</div>
	);
}

export default Settings;
