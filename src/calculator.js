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
		for (let i = 0; i < sub.length; i++) {
			sub = sub.replace(/([\d])([-])([\d])/g, '$1$2 $3');
		}

		const matches = sub.match(/([-]?\d*\.?\d+)|([+\-⨉÷])/g);

		const operands = [];
		const operators = [];

		for (const match of matches) {
			if ('-+⨉÷'.includes(match)) {
				operators.push(match);
			} else {
				operands.push(parseFloat(match));
			}
		}

		let i = 0;

		while (i < operators.length) {
			switch (operators[i]) {
			case '⨉':
				operands[i] = operands[i] * operands[i + 1];
				operands.splice(i + 1, 1);
				operators.splice(i, 1);
				break;
			case '÷':
				operands[i] = operands[i] / operands[i + 1];
				operands.splice(i + 1, 1);
				operators.splice(i, 1);
				break;
			default:
				i++;
				break;
			}
		}

		let result = operands[0];
		operands.shift();

		while (operators.length !== 0) {
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

			operands.shift();
			operators.shift();
		}

		return result;
	}
}
