export default class Calculator {
	constructor(prompt) {
		this.prompt = prompt;
	}

	getResult() {
		this.eliminateParenthesis();

		return this.process(this.prompt).toString();
	}

	eliminateParenthesis() {
		for (let i = 0; i < this.prompt.length; i++) {
			for (let j = 0; j < this.prompt.length; j++) {
				if (this.prompt[i] === '(' && this.prompt[j] === '(') {
					i = j;
					continue;
				}

				if (this.prompt[i] === '(' && this.prompt[j] === ')') {
					const sub = this.prompt.substring(i + 1, j);

					const result = this.process(sub);

					this.prompt = this.prompt.substring(0, i) + result + this.prompt.slice(j + 1);

					i = 0;
					j = 0;
				}
			}
		}
	}

	process(sub) {
		const operands = sub.split(/[+|\-|⨉|÷]/).map(o => parseInt(o));
		const operators = sub.split(/[\d]+/).filter(o => o !== '');

		let result = operands[0];

		while (operators.length !== 0) {
			operands.shift();

			switch (operators[0]) {
			case '+':
				result += operands[0];
				break;
			case '-':
				result -= operands[0];
				break;
			case '⨉':
				result *= operands[0];
				break;
			case '÷':
				result /= operands[0];
				break;
			}

			operators.shift();
		}

		return result;
	}
}
