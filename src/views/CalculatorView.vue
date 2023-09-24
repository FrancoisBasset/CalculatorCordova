<template>
	<div>
		<PromptZone id="prompt-zone" :prompt="prompt" />
		<KeyboardZone id="keyboard-zone" @keyboard-click="c => onKeyboardClick(c)" />
	</div>
</template>

<style scoped>
#prompt-zone {
	height: 30%;
}

#keyboard-zone {
	height: 70%;
}
</style>

<script>
import PromptZone from '../components/PromptZone.vue';
import KeyboardZone from '../components/KeyboardZone.vue';
import Calculator from '../calculator';

export default {
	components: {
		PromptZone,
		KeyboardZone
	},
	data() {
		return {
			prompt: ''
		};
	},
	computed: {
		lastChar() {
			if (this.prompt.length === 0) {
				return null;
			}

			return this.prompt[this.prompt.length - 1];
		}
	},
	methods: {
		onKeyboardClick(c) {
			const calculator = new Calculator(this.prompt);
			let canWrite = false;

			switch (c) {
			case 'C':
				this.prompt = '';
				break;
			case 'R':
				this.prompt = this.prompt.slice(0, this.prompt.length - 1);
				break;
			case '(':
				canWrite = this.lastChar === null;
				canWrite ||= '(+-×÷'.includes(this.lastChar);
				break;
			case ')':
				canWrite = this.lastChar !== null;
				canWrite &&= (!isNaN(this.lastChar) || this.lastChar === ')');
				canWrite &&= this.prompt.includes('(');
				break;
			case '+':
			case '-':
			case '×':
			case '÷':
				if (c === '-' && (this.lastChar === null || this.lastChar === '(')) {
					canWrite = true;
					break;
				}
				canWrite = this.lastChar === ')';
				canWrite ||= (this.lastChar !== null && !isNaN(this.lastChar));
				break;
			case '.':
				canWrite = this.lastChar !== null;
				canWrite &&= !isNaN(this.lastChar);
				break;
			case '=':
				this.prompt = calculator.getResult();
				break;
			default:
				canWrite = this.lastChar !== ')';
			}

			if (canWrite) {
				this.prompt += c;
			}
		}
	}
};
</script>
