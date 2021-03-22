
{#await getFilm(filmid)}
	<p>...loading {filmid}...</p>
{:then data} 
	<table>
		<tr>
			<td class="pictpanel">
				<div class="imgborder">
					<img src="{data['image']}" class="filmpic" alt="poster">
					<div class="ratingpanel">
						<span title="kp votes: {getVar(data, 'rating.kp_rating.num_vote', 0)}">{getVar(data, 'rating.kp_rating._', 0)}</span>
						/
						<span title="imdb votes: {getVar(data, 'rating.imdb_rating.num_vote', 0)}">{getVar(data, 'rating.imdb_rating._', 0)}</span>
					</div>
				</div>
			</td>
			<td class="infopanel">
				<div class="reldate">Release date: {getDate(data['release_date']*1000)}</div>
				<div><a href="http://kinopoisk.ru{data['filmlink']}">{data['name']} ({data['orig_name']})</a></div>
				<div class="desc">{getVar(data, 'desc', 'no description')}</div>

				<div class="tlinks">
					{#if Array.isArray(data['rutracker_links'])}
						{#each data['rutracker_links'] as link}
							<div>
								<img src={rutrimg} alt="rutracker" class="ticon rutr">
								{#if link['magnet_link']}
									<a href="{link['magnet_link']}" title="Magnet"><img src={magnetimg} alt="torrent" class="ticon rutr"></a>
								{/if}
								<a href="{link['torrentlink']}"title="Download torrent file">
									<img src={torrentimg} alt="torrent" class="ticon rutr"> {link['size']}
								</a>
								<a href="{link['page']}" target="_blank" class="tlink" title="{link['title']}">{link['title']}</a>
							</div>
						{/each}
					{/if}
					{#if Array.isArray(data['rutor_links'])}
						{#each data['rutor_links'] as link}
							<div>
								<img src={rutorimg} alt="rutor" class="ticon rutor">
								<a href="{link['torrentlink']}" title="Download torrent file">
									<img src={torrentimg} alt="torrent" class="ticon rutor"> {link['size']}&nbsp;↓
								</a>
								<a href="{link['page']}" target="_blank" class="tlink" title="{link['title']}">{link['title']}</a>
							</div>
						{/each}
					{/if}
				</div>
			</td>
		</tr>
	</table>
{/await}




<style>
	.filmpic {
		/* margin-left: -50px; */
		width: 150px;
		height: 224px;
	}
	table {
		margin-bottom: 35px;
		margin-left: -50px;
	}
	table td {
		vertical-align: top;
	}
	.infopanel {
		padding: 8px;
	}
	.reldate {
		font-size: 12px;
	}
	.desc {
		font-size: 12px;
		margin-top: 10px;
		max-width: 800px;
	}
	.tlinks {
		margin-top: 20px;
		font-size: 13px;
	}
	.tlinks > div > * {
		/* display: inline-block; */
	}
	.tlinks > div .ticon {
		width: 16px;
	}
	.tlinks > div {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		-webkit-box-orient: vertical;
	}
	.imgborder {
		padding: 0px;
		border: 5px solid gray;
		background-color: lightgray;
	}
	.ratingpanel {
		/* text-align: justify;
		width:100%; */
		font-size: 14px;
		font-weight: bold;
		width: 100%;
		text-align: center;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		/* border: 1px solid black; */
		background-color: lightgray;
		position: relative;
    	top: -4px;
	}
	.ratingpanel span{
		width: 100%;
	}

</style>

<script>
	import rutrimg from '../img/rutracker.png'
	import rutorimg from '../img/rutor.png'
	import torrentimg from '../img/torrent.png'
	import magnetimg from '../img/magnet.png'
	import {getVar} from './utils'
	export let filmid;
	// console.log(filmid);

	async function getFilm(fid) {
		return await (await fetch(`../${fid}.json`)).json();
	}

	function getDate(date) {
		const dt = new Date(date)
		return `${dt.getDate() < 10 ? "0"+dt.getDate() : dt.getDate()}/${(dt.getMonth()+1) < 10 ? "0"+(dt.getMonth()+1) : (dt.getMonth()+1)}`
	}
</script>