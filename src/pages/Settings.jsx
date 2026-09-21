function Settings() {
	const [settings, setSettings] = useState({
		voltageThdLimit: 5,
		currentThdLimit: 8,
		overvoltageThreshold: 440,
		undervoltageThreshold: 350,
		overcurrentThreshold: 90,
		overtemperatureThreshold: 80,
		dataUpdateRate: 1,
		autoCorrection: true,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setSettings({
			...settings,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSave = () => {
		alert("Settings saved successfully!");
	};

	return (
		<div className="page">
			<h2>Configuration and Settings</h2>

			<div className="settings-card">
				<h3>THD Thresholds</h3>
				<div className="setting-item">
					<label>Voltage THD Limit (%)</label>
					<input
						type="number"
						name="voltageThdLimit"
						value={settings.voltageThdLimit}
						onChange={handleChange}
					/>
				</div>
				<div className="setting-item">
					<label>Current THD Limit (%)</label>
					<input
						type="number"
						name="currentThdLimit"
						value={settings.currentThdLimit}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="settings-card">
				<h3>Alert Settings</h3>
				<div className="setting-item">
					<label>Overvoltage Threshold (V)</label>
					<input
						type="number"
						name="overvoltageThreshold"
						value={settings.overvoltageThreshold}
						onChange={handleChange}
					/>
				</div>
				<div className="setting-item">
					<label>Undervoltage Threshold (V)</label>
					<input
						type="number"
						name="undervoltageThreshold"
						value={settings.undervoltageThreshold}
						onChange={handleChange}
					/>
				</div>
				<div className="setting-item">
					<label>Overcurrent Threshold (% of rated)</label>
					<input
						type="number"
						name="overcurrentThreshold"
						value={settings.overcurrentThreshold}
						onChange={handleChange}
					/>
				</div>
				<div className="setting-item">
					<label>Overtemperature Threshold (°C)</label>
					<input
						type="number"
						name="overtemperatureThreshold"
						value={settings.overtemperatureThreshold}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="settings-card">
				<h3>System Settings</h3>
				<div className="setting-item">
					<label>Data Update Rate (seconds)</label>
					<input
						type="number"
						name="dataUpdateRate"
						value={settings.dataUpdateRate}
						onChange={handleChange}
					/>
				</div>
				<div className="setting-item">
					<label>Auto Correction</label>
					<input
						type="checkbox"
						name="autoCorrection"
						checked={settings.autoCorrection}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="settings-actions">
				<button onClick={handleSave}>SAVE SETTINGS</button>
				<button>RESET TO DEFAULT</button>
				<button>EXPORT DATA</button>
			</div>
		</div>
	);
}

export default Settings;
