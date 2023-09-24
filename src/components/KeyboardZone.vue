<template>
	<div>
		<table>
			<tr>
				<td colspan="2" @click="$emit('keyboard-click', 'C')">C</td>
				<td colspan="2" @click="$emit('keyboard-click', 'R')">
					<img src="../assets/backspace.png" width="30" style="vertical-align: middle;" />
				</td>
			</tr>
			<tr>
				<td colspan="1.5" @click="$emit('keyboard-click', '(')" class="operator-button">(</td>
				<td colspan="1.5" @click="$emit('keyboard-click', ')')" class="operator-button">)</td>
				<td></td>
				<td @click="$emit('keyboard-click', '÷')" class="operator-button">÷</td>
			</tr>
			<tr>
				<td @click="$emit('keyboard-click', '7')">7</td>
				<td @click="$emit('keyboard-click', '8')">8</td>
				<td @click="$emit('keyboard-click', '9')">9</td>
				<td @click="$emit('keyboard-click', '×')" class="operator-button">×</td>
			</tr>
			<tr>
				<td @click="$emit('keyboard-click', '4')">4</td>
				<td @click="$emit('keyboard-click', '5')">5</td>
				<td @click="$emit('keyboard-click', '6')">6</td>
				<td @click="$emit('keyboard-click', '-')" class="operator-button">-</td>
			</tr>
			<tr>
				<td @click="$emit('keyboard-click', '1')">1</td>
				<td @click="$emit('keyboard-click', '2')">2</td>
				<td @click="$emit('keyboard-click', '3')">3</td>
				<td @click="$emit('keyboard-click', '+')" class="operator-button">+</td>
			</tr>
			<tr>
				<td @click="$emit('keyboard-click', '.')">.</td>
				<td @click="$emit('keyboard-click', '0')">0</td>
				<td @click="$emit('keyboard-click', '=')" class="green-button" colspan="2">=</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
table {
	width: 100%;
	height: 100%;
	border-spacing: 0;
	border-collapse: collapse;
}

td {
	text-align: center;
	border: 1px solid lightgray;
	font-size: 26px;
}

td:active {
	background-color: lightblue;
}
</style>

<script>
export default {
	emits: [
		'keyboard-click'
	]
};
</script>
