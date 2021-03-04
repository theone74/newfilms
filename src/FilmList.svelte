
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
		let lst = await (await fetch("../list.json")).json();
		return lst.filter((i,j)=>Math.floor(j/15)==page)
	}

</script>