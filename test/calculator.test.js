import { describe, it } from 'mocha';
import assert from 'assert';
import Calculator from '../src/calculator.js';

describe('getResult', function() {
	[
		['2+3', 5],
		['5⨉4', 20],
		['10÷2', 5],
		['6-3', 3],
		['3⨉(4+2)', 18],
		['12÷(4⨉2)', 1.5],
		['(3+4)⨉5-(6÷2)', 32]
	].forEach(function([process, expected]) {
		it(process + ' = ' + expected, function() {
			const result = new Calculator(process).getResult();
			
			assert.equal(result, expected);
		});
	});
});
