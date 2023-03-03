<script lang="ts">
	import { notifications } from '../../notifications'
	import { cart, products } from '../../products'
	import { afterUpdate } from 'svelte'
	let subtotal = 0
	let total = 0
	let subtotalObj = {}
	let itemWorth = 0
	let itemName = ''
	afterUpdate(() => {
		subtotal = $cart.reduce((a, b) => a + b.price * b.quantity, 0)
		if (subtotal > 50) {
			total = (subtotal * 0.8 + 5).toFixed(2)
		} else {
			total = subtotal + 5
		}
	})
	const minusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1
					$cart = $cart
				} else {
					$cart = $cart.filter((cartItem) => cartItem != product)
				}
				return
			}
		}
	}
	const plusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1
				$cart = $cart
				return
			}
		}
	}

</script>

<div class=" flex items-center justify-center">
	<div class="flex max-w-md flex-col space-y-4 divide-y divide-gray-700 p-6 sm:w-96 sm:p-10">
		<h2 class="text-2xl font-semibold">Order items</h2>
		<ul class="flex flex-col space-y-2 pt-4">
			{#if $cart.length === 0}
				<li class="flex items-start justify-between">
					<h3>Cart is empty</h3>
				</li>
			{:else}
				{#each $cart as item}
					<li class="flex items-start justify-between">
						<img src="{item.src}" alt="{item.burgerName}" class="h-8">
						<h3>
							{item.burgerName}
							<span class="text-sm text-skin-accent">x{item.quantity}</span>
						</h3>
						<button on:click={() => minusItem(item)}>-</button>
						<button on:click={() => plusItem(item)}>+</button>
						<div class="text-right">
							<span class="block">{item.price * item.quantity}$</span>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
		<div class="space-y-2 pt-4">
			<div>
				<class class="flex justify-between">
					<span>Subtotal</span>
					<span>{subtotal}$</span>
				</class>
				<div class="flex items-center space-x-2 text-xs">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="mt-1 h-3 w-3 fill-current text-skin-accent"
					>
						<path
							d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"
						/>
						<path
							d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"
						/>
					</svg>
					<span class="dark:text-gray-400">Spend 50.00$, get 20% off</span>
				</div>
			</div>
		</div>
		<div class="space-y-2 pt-4">
			<div class="flex justify-between">
				<span>Service fee</span>
				<span>2$</span>
			</div>
			<div class="flex flex-col">
				<div class="flex justify-between">
					<span>Delivery fee</span>
					<span>3$</span>
				</div>
				<button
					class="text-xs text-skin-accent hover:underline"
					on:click={() => notifications.warning("I don't know. Figure it out  ¯\\_(ツ)_/¯", 4000)}
					>How do our fees work?</button
				>
			</div>
		</div>
		<div class="space-y-2 pt-4">
			<div class="flex justify-between">
				<span>Total</span>
				<span class="font-semibold">{total}$</span>
			</div>
			<button
				type="button"
				on:click={() => notifications.warning('Still under construction 🚧 🔨 👷‍♂️', 4000)}
				class="w-full rounded border border-skin-accent bg-skin-accent py-2 font-semibold dark:text-gray-900"
				>Go to checkout</button
			>
		</div>
	</div>
</div>
