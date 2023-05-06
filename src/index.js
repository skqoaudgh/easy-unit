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
	},
	[SYSTEM.WEIGHT]: {
		mg: 0.001,
		g: 1,
		kg: 1000,
		t: 1000000,
	},
	[SYSTEM.DISTANCE]: {
		mm: 0.1,
		cm: 1,
		m: 100,
		km: 100000,
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

const getUnit = (value) => {
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

export default class Converter {
	#base = 0;
	#unit = null;

	constructor(value = '', unit = '') {
		this.#unit = getUnit(value) || unit;
		this.#base = parseFloat(String(value));
	}

	to(unit, { digit = null, printUnit = true } = {}) {
		if (typeof unit !== 'string') {
			throw new Error('parameter unit expected a string');
		}

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

		const system = getSystem(this.#unit, unit);
		if (!system) {
			console.log(this.#unit, unit);
			throw new Error('parameter expected a same system with base unit');
		}

		const value = convert({
			system,
			base: this.#base,
			from: this.#unit,
			to: unit,
		});
		const result = !digit ? value : Number(value).toFixed(digit);

		return !printUnit ? Number(result) : `${result}${unit}`;
	}

	add(value) {
		if (typeof value !== 'string') {
			throw new Error('parameter printUnit expected a string');
		}

		const unit = getUnit(value) || this.#unit;
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

		return `${result}${this.#unit}`;
	}

	toString() {
		return `${this.#base}${this.#unit}`;
	}
}
