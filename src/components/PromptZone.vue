<template>
	<div>
		<text>{{ prompt }}</text>
	</div>
</template>

<style scoped>
div {
	position: relative;
	font-size: 46px;
}

text {
	position: absolute;
	right: 20px;
	top: 20px;
}
</style>

<script>
export default {
	props: [
		'prompt'
	]
};
</script>
