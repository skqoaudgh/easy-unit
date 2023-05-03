import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'lib/cjs/index.js',
			format: 'cjs',
		},
		{
			file: 'lib/esm/index.js',
			format: 'esm',
		},
	],
	plugins: [
		commonjs(),
		getBabelOutputPlugin({
			presets: ['@babel/preset-env'],
		}),
	],
};
