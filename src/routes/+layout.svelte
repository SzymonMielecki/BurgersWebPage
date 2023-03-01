<script>
	import '../app.css'
	import Sidebar from './sidebar.svelte'
	import Card from './card.svelte'
	import Navbar from './navbar.svelte'
	import Toast from './Toast.svelte'
	const classicburger = {
		burgerName: 'Classic Burger',
		kcal: 472,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 16,
		src: '/assets/classicburger.png'
	}
	const cheeseburger = {
		burgerName: 'Cheese Burger',
		kcal: 420,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 14,
		src: '/assets/cheeseburger.png'
	}
	const vegburger = {
		burgerName: 'Veggie Burger',
		kcal: 298,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 20,
		src: '/assets/vegburger.png'
	}
	const chickenburger = {
		burgerName: 'Chicken Burger',
		kcal: 372,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 12,
		src: '/assets/chickenburger.png'
	}
	const breakfastburger = {
		burgerName: 'Breakfast Burger',
		kcal: 389,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 10,
		src: '/assets/breakfastburger.png'
	}
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
	// function handleSwap() {
	// 	swap the clicked burger with the big burger
	// 	and the big burger with the clicked burger
	// }
</script>

<main class="flex min-h-screen flex-row font-sans">
	<aside>
		<Sidebar />
	</aside>
	<aside class="relative box-border flex h-full w-full flex-col">
		<Navbar />
		<div
			class="box-border grid max-h-full w-full grid-cols-2 grid-rows-4 gap-6 py-5 px-4 md:grid-cols-4 md:grid-rows-2"
		>
			<Card {...classicburger} {...bigburger} />
			<Card {...cheeseburger} {...smallburger} />
			<Card {...vegburger} {...smallburger} />
			<Card {...chickenburger} {...smallburger} />
			<Card {...breakfastburger} {...smallburger} />
		</div>
	</aside>
	<Toast />
</main>
