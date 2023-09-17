<template>
	<div>
		<text>{{ prompt }}</text>
	</div>
</template>

<style scoped>
div {
	font-size: 46px;
}
</style>

<script>
export default {
	props: [
		'prompt'
	]
};
</script>
