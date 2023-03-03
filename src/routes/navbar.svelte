<script>
	import { notifications } from '../notifications'
	let user = { loggedIn: false }
	let username = ''
	function handleLogin() {
		if (!user.loggedIn) {
			// sign in
			if (username.length > 0) {
				notifications.success(`Welcome ${username}!`, 2000)
				user.loggedIn = !user.loggedIn
			} else {
				notifications.danger('Please enter a username!', 3000)
			}
		} else {
			// sign out
			notifications.warning(`Goodbye ${username}! You have been signed out`, 2000)
			user.loggedIn = !user.loggedIn
			username = ''
		}
	}

	let isDropdownOpen = false // default state (dropdown close)

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen
	}

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return
		isDropdownOpen = false
	}
</script>

<nav id="header" class=" sticky top-0 z-30 w-full border-b bg-skin-background py-1">
	<div class="mt-0 flex w-full items-center justify-between px-6 py-2">
		<label for="menu-toggle" class="flex cursor-pointer justify-center gap-3 md:hidden">
			<div class="flex">
				<div class="" on:focusout={handleDropdownFocusLoss}>
					<button class="" on:click={handleDropdownClick}>
						{#if isDropdownOpen}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 96 960 960"
								class="inline-block h-7 w-7 fill-current text-skin-accent transition duration-500 hover:scale-105 "
								><path
									d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
								/></svg
							>
						{:else}
							<svg
								class="inline-block h-7 w-7 fill-current text-skin-accent transition duration-500 hover:scale-105 "
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 96 960 960"
							>
								<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
							</svg>
						{/if}
					</button>
					<ul
						class="dropdown-content rounded-box fixed w-52 bg-skin-backgroundDimmed p-2 shadow-xl"
						style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
					>
						<li>
							<button
								on:click={() => notifications.warning('Still under construction 🚧 🔨 👷‍♂️', 4000)}
								class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
								>Home</button
							>
						</li>
						<li>
							<a
								href="/"
								class="inline-block py-2 px-4 text-lg font-medium text-skin-selection no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
								>Products</a
							>
						</li>
						<li>
							<button
								on:click={() =>
									notifications.warning(
										'We use only the freshest ingredients, including locally sourced meat, veggies and buns.',
										4000
									)}
								class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
								>Recipes</button
							>
						</li>
						<li>
							<button
								on:click={() =>
									notifications.warning(
										'We are a small family business. We make burgers with love and passion, est. 1999',
										4000
									)}
								class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
								>About</button
							>
						</li>
					</ul>
				</div>
			</div>
			<button>
				<svg
					class="inline-block h-7 w-7 fill-current text-skin-accent transition duration-500 hover:scale-105 "
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
				>
					<path
						d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
					/>
				</svg>
			</button>
			<a href="/cart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					viewBox="0 96 960 960"
					width="48"
					class="inline-block h-7 w-7  fill-current text-skin-accent transition duration-500 hover:scale-105"
					><path
						d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"
					/></svg
				>
			</a>
		</label>
		<input class="hidden" type="checkbox" id="menu-toggle" />

		<div class="order-3 hidden w-full md:order-1 md:flex md:w-auto md:items-center" id="menu">
			<nav>
				<ul class="items-center justify-between pt-4 text-base text-skin-text md:flex md:pt-0">
					<li>
						<button
							on:click={() => notifications.warning('Still under construction 🚧 🔨 👷‍♂️', 4000)}
							class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
							>Home</button
						>
					</li>
					<li>
						<a
							href="/"
							class="inline-block py-2 px-4 text-lg font-medium text-skin-selection no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
							>Products</a
						>
					</li>
					<li>
						<button
							on:click={() =>
								notifications.warning(
									'We use only the freshest ingredients, including locally sourced meat, veggies and buns.',
									4000
								)}
							class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
							>Recipes</button
						>
					</li>
					<li>
						<button
							on:click={() =>
								notifications.warning(
									'We are a small family business. We make burgers with love and passion, est. 1999',
									4000
								)}
							class="inline-block py-2 px-4 text-lg font-medium no-underline transition duration-500 hover:scale-105 hover:text-skin-selectionHover lg:-ml-2 "
							>About</button
						>
					</li>
				</ul>
			</nav>
		</div>

		<div
			class="order-2 mr-0 flex flex-wrap items-center justify-end md:order-3 md:mr-4"
			id="nav-content"
		>
			<div class="auth flex w-full items-center gap-4 md:w-full">
				{#if !user.loggedIn}
					<form>
						<input
							type="text"
							bind:value={username}
							placeholder="Username"
							class="w-24 transition duration-500 hover:scale-105 focus:outline-none"
							id="usernameInput"
							autocomplete="off"
						/>
						<button
							on:click={handleLogin}
							class="rounded-lg bg-skin-accentDimmed p-2 text-skin-accent transition duration-500 hover:scale-105 hover:bg-skin-accentDimmedHover "
							>Sign up</button
						>
						<button
							on:click={handleLogin}
							class="rounded-lg bg-skin-accent p-2 text-skin-accentDimmed transition duration-500 hover:scale-105 hover:bg-skin-accentHover "
							>Sign in</button
						>
					</form>
				{/if}
				{#if user.loggedIn}
					<h1>Signed in as {username}</h1>
					<button
						on:click={handleLogin}
						class="rounded-lg bg-skin-accent p-2 text-skin-accentDimmed transition duration-500 hover:scale-105 hover:bg-skin-accentHover "
						>Sign Out</button
					>
				{/if}
			</div>
		</div>
	</div>
</nav>
