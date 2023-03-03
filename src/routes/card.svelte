<script lang="ts">
	import { fade } from 'svelte/transition'
	import { cart } from '../products'
	import { notifications } from '../notifications'
	export let burgerName = ''
	export let kcal = 0
	export let protein = 0
	export let carbs = 0
	export let fat = 0
	export let salt = 0
	export let description = ''
	export let price = 0
	export let src = ''
	export let nutrients = ''
	export let background = ''
	export let span = ''
	export let quantity = 1
	export let id = 0
	function incrementOnClick() {
		quantity += 1
	}
	function decrementOnClick() {
		if (quantity > 1) {
			quantity -= 1
		}
	}
	const handleAddToCart = (product) => {
		notifications.warning(`Added ${quantity} ${burgerName}s (${quantity * price}$) to cart!`, 4000)
		console.log(product)
		for (let item of $cart) {
			if (item.id === product.id) {
				item.quantity += product.quantity
				$cart = $cart
				return
			}
		}
		$cart.push(product)
	}
</script>

<div class="flex gap-1 {span} order-{id + 1} box-border" in:fade={{ duration: 200 }}>
	<div
		class="relative flex h-full w-full transform cursor-pointer justify-center rounded-xl transition duration-500 hover:scale-105"
	>
		<div
			class="absolute top-0 left-0 z-30 mt-3 rounded-lg bg-skin-selection px-2 text-xs font-medium text-skin-backgroundDimmed"
		>
			{kcal} Kcal
		</div>
		<div class="z-10 w-full rounded-xl {background} flex flex-col justify-center pb-2 shadow-xl">
			<div class="relative mx-auto flex">
				<button on:click>
					<img {src} class="m-auto w-full object-cover" alt={burgerName} />
				</button>
				<div
					class="absolute bottom-0 right-0 mb-2 mr-2 rounded-lg bg-skin-accent px-2 text-xs font-medium text-skin-backgroundDimmed hover:bg-skin-accentHover"
				>
					<button on:click={decrementOnClick}> - </button>
					{quantity}
					<button on:click={incrementOnClick}> + </button>
				</div>
			</div>
			<div class="px-2 py-1">
				<div class="pr-2 text-sm font-bold ">{burgerName}</div>
				<div class="flex flex-wrap py-1 {nutrients}">
					<div
						class="mr-2 rounded-full bg-skin-backgroundDimmed2 p-1 text-xs font-medium text-skin-textDimmed"
					>
						{protein} g of protein
					</div>
					<div
						class="mr-2 rounded-full bg-skin-backgroundDimmed2 p-1 text-xs font-medium text-skin-textDimmed"
					>
						{carbs} g of carbs
					</div>
					<div
						class="mr-2 rounded-full bg-skin-backgroundDimmed2 p-1 text-xs font-medium text-skin-textDimmed"
					>
						{fat} g of fats
					</div>
					<div
						class="mr-2 rounded-full bg-skin-backgroundDimmed2 p-1 text-xs font-medium text-skin-textDimmed"
					>
						{salt} g of salt
					</div>
				</div>
				<p class="pb-1 text-xs text-skin-textDimmed">
					{description}
				</p>
				<button
					class="place-center left-0 bottom-0 flex w-full justify-center rounded-xl border bg-skin-selection fill-skin-backgroundDimmed p-1 text-sm text-skin-backgroundDimmed hover:border-skin-selection hover:bg-skin-background hover:fill-skin-selectionDimmed hover:text-skin-selectionDimmed"
					on:click={() =>
						handleAddToCart({
							id,
							burgerName,
							price,
							src,
							quantity
						})}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
						<path
							d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"
							class=""
						/>
					</svg>
					<span class="flex-wrap self-center">
						<div>Add to Cart</div>
						<div>{price}$</div>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
