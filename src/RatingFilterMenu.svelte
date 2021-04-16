
<div class="menu">
	<div on:click={handleClick} class:selected="{filter === '9'}" data-filter=9>9+</div>
	<div on:click={handleClick} class:selected="{filter === '8'}" data-filter=8>8+</div>
	<div on:click={handleClick} class:selected="{filter === '7'}" data-filter=7>7+</div>
	<div on:click={handleClick} class:selected="{filter === '6'}" data-filter=6>6+</div>
	<div on:click={handleClick} class:selected="{filter === '5'}" data-filter=5>5+</div>
</div>

<script>
	import {Params} from './utils'
	let p = new Params()
	let filter = p.filter ? p.filter : '5';

	function handleClick(e) {
		if (this.dataset['filter']) {
			p.filter = this.dataset['filter']
			p.save()
		}
	}

</script>

<style>
	.menu {
		position: fixed;
	}

	.menu>div {
		border: 1px solid gray;
		border-radius: 7px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		user-select: none;
		cursor: pointer;
		margin: 5px;
		box-shadow: 2px 1px 3px black;
	}

	.menu>div.selected {
		background-color: black;
		color: white;
		border: 1px solid transparent;
	}

</style>