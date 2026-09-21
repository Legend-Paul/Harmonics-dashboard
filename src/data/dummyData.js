export const dummyData = {
	timestamp: new Date().toISOString(),
	device_id: "ESP32-AHF-001",
	status: "online",
	mode: "monitoring",

	phases: {
		R: {
			voltage: 415.2,
			current: 25.1,
			active_power: 4200,
			reactive_power: 1100,
			apparent_power: 4350,
			power_factor: 0.95,
			thd_voltage: 2.8,
			thd_current: 3.2,
			harmonics: { "3rd": 1.2, "5th": 1.8, "7th": 0.9 },
		},
		Y: {
			voltage: 414.5,
			current: 25.8,
			active_power: 4100,
			reactive_power: 1200,
			apparent_power: 4300,
			power_factor: 0.94,
			thd_voltage: 2.9,
			thd_current: 3.6,
			harmonics: { "3rd": 1.3, "5th": 1.9, "7th": 1.0 },
		},
		B: {
			voltage: 416.0,
			current: 25.3,
			active_power: 4200,
			reactive_power: 1000,
			apparent_power: 4350,
			power_factor: 0.96,
			thd_voltage: 2.7,
			thd_current: 3.4,
			harmonics: { "3rd": 1.1, "5th": 1.7, "7th": 0.8 },
		},
	},

	summary: {
		total_active_power: 12500,
		total_reactive_power: 3300,
		total_apparent_power: 13000,
		average_power_factor: 0.95,
		frequency: 50.02,
		energy_kwh: 1250.5,
		energy_cost_ksh: 22509,
	},

	harmonic_correction: {
		active: true,
		last_correction: "2026-07-31T10:28:00Z",
		compensation_current: 2.5,
		thd_before: 28.5,
		thd_after: 3.5,
	},

	alerts: [
		{
			id: 1,
			type: "high_thd",
			message: "THD exceeded 5%",
			value: "5.8%",
			timestamp: "2026-07-31T10:30:00Z",
			status: "resolved",
		},
		{
			id: 2,
			type: "overvoltage",
			message: "Voltage exceeded 440V",
			value: "445V",
			timestamp: "2026-07-31T09:15:00Z",
			status: "resolved",
		},
	],

	energy: {
		today_kwh: 45.2,
		today_cost_ksh: 813,
		week_kwh: 315.8,
		week_cost_ksh: 5684,
		month_kwh: 1250.5,
		month_cost_ksh: 22509,
		savings_kwh: 139,
		savings_cost_ksh: 2502,
	},
};

export const voltageTrend = [
	{ time: "10:00", R: 415, Y: 414, B: 416 },
	{ time: "10:05", R: 414, Y: 413, B: 415 },
	{ time: "10:10", R: 416, Y: 415, B: 417 },
	{ time: "10:15", R: 415, Y: 414, B: 416 },
	{ time: "10:20", R: 413, Y: 412, B: 414 },
	{ time: "10:25", R: 415, Y: 414, B: 416 },
	{ time: "10:30", R: 415, Y: 414, B: 416 },
];

export const energyTrend = [
	{ day: "Mon", kwh: 45 },
	{ day: "Tue", kwh: 42 },
	{ day: "Wed", kwh: 48 },
	{ day: "Thu", kwh: 44 },
	{ day: "Fri", kwh: 46 },
	{ day: "Sat", kwh: 38 },
	{ day: "Sun", kwh: 32 },
];

export const harmonicSpectrum = [
	{ order: "1st", magnitude: 100 },
	{ order: "3rd", magnitude: 1.2 },
	{ order: "5th", magnitude: 1.8 },
	{ order: "7th", magnitude: 0.9 },
	{ order: "9th", magnitude: 0.5 },
	{ order: "11th", magnitude: 0.3 },
];
