import { describe, it } from 'mocha';
import assert from 'assert';
import Calculator from '../src/calculator.js';

describe('getResult', function() {
	[
		['-2-2', -4],
		['9-1-2-2', 4],
		['2+3', 5],
		['6-2', 4],
		['5⨉4', 20],
		['10÷2', 5],
		['1+2+3', 6],
		['9-2-3', 4],
		['2⨉3⨉4', 24],
		['100÷2÷5', 10],
		['3⨉(4+2)', 18],
		['12÷(4⨉2)', 1.5],
		['(3+4)⨉5-(6÷2)', 32],
		['(8+2)÷2+(5⨉3)', 20],
		['10÷2+8⨉2-(7+1)', 13],
		['(10+3)⨉(7-2)⨉(5+1)', 390],
		['((12⨉2)-(3+1)+(10-2))⨉2', 56],
		['(2⨉((8-2)⨉(6+(4-3))-5))+1', 75]
	].forEach(function([process, expected]) {
		it(process + ' = ' + expected, function() {
			const result = new Calculator(process).getResult();
			
			assert.equal(result, expected);
		});
	});
});
