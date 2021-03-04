
{#await getList(page)}
	<p>...waiting</p>
{:then list} 
	{#each list as filmid}
		<Film filmid={filmid}></Film>
	{/each}
{/await}


<script>
	import Film from "./Film.svelte";
	export let page;

	async function getList(page) {
		return await (await fetch("../list.json")).json();
	}

</script>