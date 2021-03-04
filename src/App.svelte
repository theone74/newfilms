
<div class="transport">
	{#if page > 0}
		<a href="{prevPage}">&lt;&lt; Prev</a>
	{/if}
	<a href="{nextPage}">Next &gt;&gt;</a>
</div>

<div class="container">
	{#if typeof fetch !== 'undefined' }
	<FilmList page={page}></FilmList>
	{/if}
</div>

<div class="transport">
	{#if page > 0}
		<a href="{prevPage}">&lt;&lt; Prev</a>
	{/if}
	<a href="{nextPage}">Next &gt;&gt;</a>
</div>

<style>
.container {
	background-color: lightgray;
	margin-left: 200px;
	padding-top: 5px;
	min-height: 100%;
}
.transport {
	margin-left: 200px;
	padding: 35px 0 35px 0;
}
</style>

<script>
	import FilmList from "./FilmList.svelte";
	export let page;

	let nextPage = `?page=${parseInt(page)+1}`;
	let prevPage = `?page=${parseInt(page)-1}`;

	if (typeof fetch === 'undefined') {
		nextPage = `${parseInt(page)+1}.html`;
		prevPage = `${parseInt(page)-1}.html`;
	}

	let name = 'world';
</script>