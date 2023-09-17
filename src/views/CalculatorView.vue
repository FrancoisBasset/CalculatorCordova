<template>
	<div>
		<PromptZone id="prompt-zone" :prompt="prompt" />
		<KeyboardZone id="keyboard-zone" @keyboard-click="c => onKeyboardClick(c)" />
	</div>
</template>

<style scoped>
#prompt-zone {
	height: 35%;
}

#keyboard-zone {
	height: 65%;
}
</style>

<script>
import PromptZone from '../components/PromptZone.vue';
import KeyboardZone from '../components/KeyboardZone.vue';
import useCalculatorStore from '../stores/calculator';

export default {
	components: {
		PromptZone,
		KeyboardZone
	},
	data() {
		return {
			calculator: useCalculatorStore(),
			prompt: ''
		};
	},
	methods: {
		onKeyboardClick(c) {
			switch (c) {
				case 'C':
					this.prompt = '';
					break;
				case 'R':
					this.prompt = this.prompt.slice(0, this.prompt.length - 1);
					break;
				default:
				this.prompt += c;
			}
		}
	}
};
</script>
