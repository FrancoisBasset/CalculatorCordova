import { defineStore } from 'pinia';

export default defineStore('calculator', {
	state: () => {
		return {
			prompt: ''
		};
	},
	actions: {
		show() {
			alert();
		}
	}
});
