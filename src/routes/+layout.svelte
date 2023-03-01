<script>
	import '../app.css'
	import Sidebar from './sidebar.svelte'
	import Navbar from './navbar.svelte'
	import Toast from './Toast.svelte'
</script>

<main class="flex min-h-screen flex-row font-sans">
	<aside>
		<Sidebar />
	</aside>
	<aside class="relative box-border flex h-full w-full flex-col">
		<Navbar />
		<slot />
	</aside>
	<Toast />
</main>
