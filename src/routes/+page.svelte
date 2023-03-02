<script>
	import Card from './card.svelte'
	import { products } from '../products'
	const bigburger = {
		nutrients: '',
		background: 'bg-skin-background border-2 border-skin-backgroundDimmed',
		span: 'col-span-2 row-span-2 order-first'
	}
	const smallburger = {
		nutrients: 'hidden',
		background: 'bg-skin-backgroundDimmed',
		span: 'row-span-1 col-span-1'
	}

	let bigId = 1
	let temp = 0
	function handleSwap(grabId = 0) {
		temp = bigId
		bigId = grabId
		grabId = temp
	}
</script>

<div
	class="box-border grid max-h-full w-full grid-cols-2 grid-rows-4 gap-6 py-5 px-4 md:grid-cols-4 md:grid-rows-2"
>
	{#each $products as product, id}
		{#if product.id === bigId}
			<Card {...product} {...bigburger} {id} on:click={() => handleSwap(product.id)} />
		{:else}
			<Card {...product} {...smallburger} {id} on:click={() => handleSwap(product.id)} />
		{/if}
	{/each}
</div>
