<script>
	let title = 'Login';
	// check if the user is credential is correct
	export let form;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
		WordAlchemy
	</a>
	<div
		class="w-full bg-white rounded-lg border hover:border-blue-300/50 shadow-xl shadow-blue-400/50 dark:border md:mt-0 sm:max-w-md dark:shadow xl:p-0 dark:bg-gray-900/60 dark:border-black">
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Log in into your account
			</h1>
			<form class="space-y-4 md:space-y-6" method="post" action="?/login">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email or username</label>
					<input
						type="text"
						name="credentials"
						id="credentials"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com or username"
						required />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="your password"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required />
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-start">
						<div class="flex items-center h-5">
							<input
								id="remember"
								aria-describedby="remember"
								type="checkbox"
								class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
								required />
						</div>
						<div class="ml-3 text-sm">
							<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
						</div>
					</div>
					<a
						href="/auth/reset"
						class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
						>Forgot password?</a>
				</div>

				{#if form?.credentials}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							Wrong credentials
						</h1>
					</div>
				{:else if form?.invalidFormat}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							Invalid format
						</h1>
					</div>
				{:else if form?.verification}
					<div class="pt-3">
						<h1 class="bg-red-300 text-red-500 p-2.5 justify-center text-center w-full rounded-lg">
							not verified
						</h1>
					</div>
				{/if}

				<button
					type="submit"
					class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4
                    focus:outline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800">Log in</button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Don’t have an account yet? <a
						href="/auth/register"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
				</p>
			</form>
		</div>
	</div>
</div>
