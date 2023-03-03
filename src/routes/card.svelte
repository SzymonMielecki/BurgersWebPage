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

<div class="flex gap-1 {span}" in:fade={{ duration: 200 }}>
	<div
		class="relative flex h-full w-full transform cursor-pointer justify-center rounded-xl transition duration-500 hover:scale-105 "
	>
		<div
			class="absolute top-0 left-0 z-30 mt-3 rounded-lg bg-skin-selection px-2 text-xs font-medium text-skin-backgroundDimmed"
		>
			{kcal} Kcal
		</div>
		<div
			class="z-10 w-full rounded-xl {background} box-border flex flex-col justify-center pb-2 shadow-xl"
		>
			<div class="relative mx-auto flex">
				<button on:click>
					<img {src} class="m-auto object-cover px-9" alt={burgerName} />
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
				<p class="pb-1 text-xs text-skin-textDimmed {nutrients}">
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
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="my-auto h-7 w-7"
						><path
							d="M465 443V320H341v-60h124V137h60v123h123v60H525v123h-60ZM289.788 976Q260 976 239 954.788q-21-21.213-21-51Q218 874 239.212 853q21.213-21 51-21Q320 832 341 853.212q21 21.213 21 51Q362 934 340.788 955q-21.213 21-51 21Zm404 0Q664 976 643 954.788q-21-21.213-21-51Q622 874 643.212 853q21.213-21 51-21Q724 832 745 853.212q21 21.213 21 51Q766 934 744.788 955q-21.213 21-51 21ZM290 769q-42 0-61.5-34t.5-69l61-111-150-319H62v-60h116l170 364h292l156-280 52 28-153 277q-9.362 16.667-24.681 25.833Q655 600 634 600H334l-62 109h494v60H290Z"
						/></svg
					>
					<span class="flex-wrap self-center">
						<div>Add to Cart</div>
						<div>{price}$</div>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
