const SYSTEM = {
	TIME: 'time',
	WEIGHT: 'weight',
	DISTANCE: 'distance',
	TEMPERATURE: 'temperature',
	AREA: 'area',
};

const WEIGHT = {
	[SYSTEM.TIME]: {
		ms: 0.001,
		s: 1,
		m: 60,
		h: 3600,
		d: 86400,
	},
	[SYSTEM.WEIGHT]: {
		mg: 0.001,
		g: 1,
		kg: 1000,
		t: 1000000,
		kt: 1000000000,
	},
	[SYSTEM.DISTANCE]: {
		mm: 0.1,
		cm: 1,
		m: 100,
		km: 100000,
		in: 2.54,
		ft: 30.48,
		yd: 91.44,
		mile: 160934.4,
	},
	[SYSTEM.AREA]: {
		'm^2': 1,
		a: 100,
		ha: 10000,
	},
};

const FORMULA = {
	[SYSTEM.TEMPERATURE]: {
		C: (F) => (Number(F) - 32) / 1.8,
		F: (C) => Number(C) * 1.8 + 32,
	},
};

const getSystem = (from, to) => {
	if (typeof from !== 'string' || typeof to !== 'string') {
		throw new Error('parameter expected a string');
	}

	for (const [key, value] of Object.entries(WEIGHT)) {
		const units = Object.keys(value);

		if (units.includes(from) && units.includes(to)) {
			return key;
		}
	}

	for (const [key, value] of Object.entries(FORMULA)) {
		const units = Object.keys(value);

		if (units.includes(from) && units.includes(to)) {
			return key;
		}
	}

	return null;
};

const parseValueToUnit = (value) => {
	if (typeof value !== 'string') {
		throw new Error('parameter expected a string');
	}

	const unit = value.replace(/(-|[0-9]|\.|\,)+([\S]+)?/, '$2').trim();
	if (!unit || /[^\^]\d/.test(unit)) {
		return null;
	}

	return unit;
};

const canCalculateWithWeight = (system) => {
	const weightSystmes = Object.keys(WEIGHT);

	return weightSystmes.includes(system);
};

const convertUnitByWeight = ({ system, base, from, to }) => {
	const curWeight = WEIGHT[system][from];
	const targetWeight = WEIGHT[system][to];
	const result = base * (curWeight / targetWeight);

	return result;
};

const converUnitByFormula = ({ system, base, from, to }) => {
	const formula = from !== to ? FORMULA[system][to] : (base) => base;

	return formula(base);
};

const convert = ({ system, base, from, to }) => {
	if (canCalculateWithWeight(system)) {
		return convertUnitByWeight({
			system,
			base,
			from,
			to,
		});
	}

	return converUnitByFormula({
		system,
		base,
		from,
		to,
	});
};

const isValidUnit = (unit) => {
	const isWeightUnit = Object.values(WEIGHT).some((values) =>
		Object.keys(values).includes(unit)
	);

	if (isWeightUnit) {
		return true;
	}

	return Object.values(FORMULA).some((values) =>
		Object.keys(values).includes(unit)
	);
};

export default class Converter {
	#base = 0;
	#unit = null;

	constructor(value = '', unit = '') {
		this.#unit = parseValueToUnit(value) || unit;
		this.#base = parseFloat(String(value));
	}

	get unit() {
		return this.#unit;
	}

	getUnit() {
		return this.#unit;
	}

	set unit(unit) {
		if (typeof unit !== 'string') {
			throw new Error('parameter unit expected a string');
		}

		this.#unit = unit;
		return unit;
	}

	setUnit(unit) {
		if (typeof unit !== 'string') {
			throw new Error('parameter unit expected a string');
		}

		this.#unit = unit;
		return unit;
	}

	get base() {
		return this.#base;
	}

	getBase() {
		return this.#base;
	}

	set base(base) {
		if (typeof base !== 'number') {
			throw new Error('parameter base expected a string');
		}

		this.#base = base;
		return base;
	}

	setBase(base) {
		if (typeof base !== 'number') {
			throw new Error('parameter base expected a string');
		}

		this.#base = base;
		return base;
	}

	set(value = '', unit = '') {
		this.#unit = parseValueToUnit(value) || unit;
		this.#base = parseFloat(String(value));
		return `${this.#unit}${this.#base}`;
	}

	isValid(value = '') {
		if (unit && typeof unit !== 'string') {
			throw new Error('parameter unit expected a string');
		}

		const unit = parseValueToUnit(value) || '';
		return unit ? !!getSystem(this.#unit, unit) : isValidUnit(this.#unit);
	}

	to(unit, { digit = null, printUnit = true } = {}) {
		if (typeof unit !== 'string') {
			throw new Error('parameter unit expected a string');
		}

		const system = getSystem(this.#unit, unit);
		if (!system) {
			throw new Error('parameter expected a same system with base unit');
		}

		const value = convert({
			system,
			base: this.#base,
			from: this.#unit,
			to: unit,
		});

		this.#base = value;
		this.#unit = unit;

		return this.toString({ digit, printUnit });
	}

	add(value, { digit = null, printUnit = true } = {}) {
		if (typeof value !== 'string') {
			throw new Error('parameter printUnit expected a string');
		}

		const unit = parseValueToUnit(value) || this.#unit;
		const system = getSystem(this.#unit, unit);
		if (!system) {
			throw new Error('parameter expected a same system with base unit');
		}

		const toValue = convert({
			system,
			base: parseFloat(value),
			from: unit,
			to: this.#unit,
		});
		const result = this.#base + parseFloat(toValue);
		this.#base = result;

		return this.toString({ digit, printUnit });
	}

	subtract(value, { digit = null, printUnit = true } = {}) {
		if (typeof value !== 'string') {
			throw new Error('parameter printUnit expected a string');
		}

		const unit = parseValueToUnit(value) || this.#unit;
		const system = getSystem(this.#unit, unit);
		if (!system) {
			throw new Error('parameter expected a same system with base unit');
		}

		const toValue = convert({
			system,
			base: parseFloat(value),
			from: unit,
			to: this.#unit,
		});
		const result = this.#base - parseFloat(toValue);
		this.#base = result;

		return this.toString({ digit, printUnit });
	}

	isGreater(value) {
		if (typeof value !== 'string') {
			throw new Error('parameter printUnit expected a string');
		}

		const unit = parseValueToUnit(value) || this.#unit;
		const system = getSystem(this.#unit, unit);
		if (!system) {
			throw new Error('parameter expected a same system with base unit');
		}

		const toValue = convert({
			system,
			base: parseFloat(value),
			from: unit,
			to: this.#unit,
		});
		const result = this.#base > parseFloat(toValue);
		return result;
	}

	isLess(value) {
		if (typeof value !== 'string') {
			throw new Error('parameter printUnit expected a string');
		}

		const unit = parseValueToUnit(value) || this.#unit;
		const system = getSystem(this.#unit, unit);
		if (!system) {
			throw new Error('parameter expected a same system with base unit');
		}

		const toValue = convert({
			system,
			base: parseFloat(value),
			from: unit,
			to: this.#unit,
		});
		const result = this.#base < parseFloat(toValue);
		return result;
	}

	toString({ digit = null, printUnit = true } = {}) {
		if (digit && typeof digit !== 'number') {
			throw new Error('parameter digit expected a number');
		}

		if (digit === 0 || digit > 100) {
			throw new Error(
				'parameter digit expected greater than 0 and less than 100'
			);
		}

		if (typeof printUnit !== 'boolean') {
			throw new Error('parameter printUnit expected a boolean');
		}

		const base = !digit ? this.#base : Number(this.#base).toFixed(digit);

		return !printUnit ? Number(base) : `${base}${this.#unit}`;
	}
}
