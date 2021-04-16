<RatingFilterMenu></RatingFilterMenu>

<div class="transport">
	{#if p.page > 0}
		<a href="#wait" on:click={prevPage}>&lt;&lt; Prev</a>
	{/if}
	<a href="#wait" on:click={nextPage}>Next &gt;&gt;</a>
</div>

<div class="container">
	{#if typeof fetch !== 'undefined' }
	<FilmList page={p.page ? p.page : 0}></FilmList>
	{/if}
</div>

<div class="transport">
	{#if p.page > 0}
		<a href="#wait" on:click={prevPage}>&lt;&lt; Prev</a>
	{/if}
	<a href="#wait" on:click={nextPage}>Next &gt;&gt;</a>
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
	import RatingFilterMenu from "./RatingFilterMenu.svelte";
	import {Params} from './utils'
	let p = new Params()

	function nextPage() {
		p.page = parseInt(p.page ? p.page : '0') + 1;
		p.save()
	}

	function prevPage() {
		p.page = parseInt(p.page ? p.page : '0') - 1;
		p.save()
	}

	let name = 'world';
</script>