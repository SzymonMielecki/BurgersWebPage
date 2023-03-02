import { readable, writable } from 'svelte/store'

export const cart = writable([])
export const products = writable([
	{
		burgerName: 'Classic Burger',
		kcal: 472,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 16,
		src: '/assets/classicburger.png',
		id: 1,
		quantity: 1
	},
	{
		burgerName: 'Cheese Burger',
		kcal: 420,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 14,
		src: '/assets/cheeseburger.png',
		id: 2,
		quantity: 1
	},
	{
		burgerName: 'Veggie Burger',
		kcal: 298,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 20,
		src: '/assets/vegburger.png',
		id: 3,
		quantity: 1
	},
	{
		burgerName: 'Chicken Burger',
		kcal: 372,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 12,
		src: '/assets/chickenburger.png',
		id: 4,
		quantity: 1
	},
	{
		burgerName: 'Breakfast Burger',
		kcal: 389,
		protein: 20,
		carbs: 20,
		fat: 20,
		salt: 1,
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		price: 10,
		src: '/assets/breakfastburger.png',
		id: 5,
		quantity: 1
	}
])
