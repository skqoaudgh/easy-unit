const Cv = require('../lib/cjs/index');

describe('Convert', () => {
	it('Convert time unit', () => {
		const from = [
			'1000ms',
			'20ms',
			'10s',
			'315s',
			'3600s',
			'3m',
			'135m',
			'150m',
			'1h',
			'3h',
			'10h',
		];
		const to = ['s', 'ms', 's', 'm', 'h', 's', 'm', 'h', 's', 'm', 'h'];
		const expectedValues = [
			'1s',
			'20ms',
			'10s',
			'5.25m',
			'1h',
			'180s',
			'135m',
			'2.5h',
			'3600s',
			'180m',
			'10h',
		];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).to(to[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});

	it('Convert weight unit', () => {
		const from = [
			'10000mg',
			'3000mg',
			'10g',
			'5000g',
			'6500g',
			'1kg',
			'100kg',
			'1000kg',
			'1t',
			'2t',
			'3t',
		];
		const to = ['kg', 'g', 'g', 'kg', 't', 'g', 'kg', 't', 'g', 'kg', 't'];
		const expectedValues = [
			'0.01kg',
			'3g',
			'10g',
			'5kg',
			'0.0065t',
			'1000g',
			'100kg',
			'1t',
			'1000000g',
			'2000kg',
			'3t',
		];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).to(to[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});

	it('Convert distance unit', () => {
		const from = [
			'10000mm',
			'3000mm',
			'10cm',
			'5000cm',
			'6500cm',
			'1m',
			'100m',
			'1000m',
			'1km',
			'2km',
			'3km',
		];
		const to = [
			'm',
			'mm',
			'mm',
			'cm',
			'km',
			'mm',
			'cm',
			'km',
			'mm',
			'cm',
			'km',
		];
		const expectedValues = [
			'10m',
			'3000mm',
			'100mm',
			'5000cm',
			'0.065km',
			'1000mm',
			'10000cm',
			'1km',
			'1000000mm',
			'200000cm',
			'3km',
		];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).to(to[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});

	it('Convert temperature unit', () => {
		const from = ['0C', '-10C', '35C', '1C', '5F', '-58F', '50F', '1F'];
		const to = ['F', 'F', 'F', 'C', 'C', 'C', 'C', 'F'];
		const expectedValues = [
			'32F',
			'14F',
			'95F',
			'1C',
			'-15C',
			'-50C',
			'10C',
			'1F',
		];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).to(to[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});

	it('Convert area unit', () => {
		const from = [
			'1m^2',
			'100m^2',
			'3000m^2',
			'1a',
			'10a',
			'200a',
			'2ha',
			'1ha',
			'3ha',
		];
		const to = ['m^2', 'a', 'ha', 'm^2', 'a', 'ha', 'm^2', 'a', 'ha'];
		const expectedValues = [
			'1m^2',
			'1a',
			'0.3ha',
			'100m^2',
			'10a',
			'2ha',
			'20000m^2',
			'100a',
			'3ha',
		];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).to(to[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});
});

describe('Manipulate', () => {
	it('Add two values', () => {
		const from = ['10m', '1km', '5F'];
		const addedValue = ['3h', '500m', '35C'];
		const expectedValues = ['190m', '1.5km', '100F'];

		for (let i = 0; i < from.length; i++) {
			const value = new Cv(from[i]).add(addedValue[i]);
			expect(value).toBe(expectedValues[i]);
		}
	});
});

describe('Getter/Setter', () => {
	it('Get unit (getter)', () => {
		const values = [
			'10m',
			'30kg',
			'24.5C',
			'5.5cm',
			'9ha',
			'32h',
			'600g',
			'77F',
			'8t',
			'1000s',
		];

		const expectedValues = [
			'm',
			'kg',
			'C',
			'cm',
			'ha',
			'h',
			'g',
			'F',
			't',
			's',
		];

		for (let i = 0; i < values.length; i++) {
			const unit = new Cv(values[i]).unit;
			expect(unit).toBe(expectedValues[i]);
		}
	});

	it('Get unit (function)', () => {
		const values = [
			'10m',
			'30kg',
			'24.5C',
			'5.5cm',
			'9ha',
			'32h',
			'600g',
			'77F',
			'8t',
			'1000s',
		];

		const expectedValues = [
			'm',
			'kg',
			'C',
			'cm',
			'ha',
			'h',
			'g',
			'F',
			't',
			's',
		];

		for (let i = 0; i < values.length; i++) {
			const unit = new Cv(values[i]).getUnit();
			expect(unit).toBe(expectedValues[i]);
		}
	});

	it('Get base (getter)', () => {
		const values = [
			'10m',
			'30kg',
			'24.5C',
			'5.5cm',
			'9ha',
			'32h',
			'600g',
			'77F',
			'8t',
			'1000s',
		];

		const expectedValues = [10, 30, 24.5, 5.5, 9, 32, 600, 77, 8, 1000];

		for (let i = 0; i < values.length; i++) {
			const unit = new Cv(values[i]).base;
			expect(unit).toBe(expectedValues[i]);
		}
	});

	it('Get base (function)', () => {
		const values = [
			'10m',
			'30kg',
			'24.5C',
			'5.5cm',
			'9ha',
			'32h',
			'600g',
			'77F',
			'8t',
			'1000s',
		];

		const expectedValues = [10, 30, 24.5, 5.5, 9, 32, 600, 77, 8, 1000];

		for (let i = 0; i < values.length; i++) {
			const unit = new Cv(values[i]).getBase();
			expect(unit).toBe(expectedValues[i]);
		}
	});
});

describe('Validate', () => {
	// it('Validate that assigned unit is convertable', () => {
	// 	const values = [
	// 		'10m',
	// 		'30kg',
	// 		'24.5C',
	// 		'5.5cm',
	// 		'9ha',
	// 		'32u',
	// 		'600i',
	// 		'77er',
	// 		'n8',
	// 		'100k0k',
	// 	];

	// 	const expectedValues = [
	// 		true,
	// 		true,
	// 		true,
	// 		true,
	// 		true,
	// 		false,
	// 		false,
	// 		false,
	// 		false,
	// 		false,
	// 	];

	// 	for (let i = 0; i < values.length; i++) {
	// 		const result = new Cv(values[i]).isValid();
	// 		expect(result).toBe(expectedValues[i]);
	// 	}
	// });

	it('Validate that unit is on the same system', () => {
		const values1 = [
			'10m',
			'30kg',
			'24.5C',
			'5.5cm',
			'9ha',
			'32h',
			'600g',
			'77F',
			'8t',
			'1000s',
		];

		const values2 = [
			'10s',
			'30t',
			'24.5F',
			'5.5km',
			'9a',
			'32km',
			'600F',
			'77t',
			'8ha',
			'1000C',
		];

		const expectedValues = [
			true,
			true,
			true,
			true,
			true,
			false,
			false,
			false,
			false,
			false,
		];

		for (let i = 0; i < values1.length; i++) {
			const result = new Cv(values1[i]).isValid(values2[i]);
			expect(result).toBe(expectedValues[i]);
		}
	});
});
