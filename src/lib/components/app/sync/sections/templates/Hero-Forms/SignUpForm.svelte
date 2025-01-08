<script lang="ts">
	// import { form } from './form.ts';
	import { Field, SubmitButton } from 'shadcn-svelte';
	import * as Form from "$lib/components/ui/form";

	let { form: formState, errors } = Form();
  </script>
  
  <div class="relative bg-gradient-to-bl from-blue-100 via-transparent">
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	  <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
		<div>
		  <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
			Preline: A vision for 2024
		  </p>
		  <div class="mt-4 md:mb-12 max-w-2xl">
			<h1 class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl">
			  Fully customizable rules to match your unique needs
			</h1>
			<p class="text-gray-600">
			  We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
			</p>
		  </div>
		</div>
  
		<div>
		  <Form {formState} on:submit={() => console.log(formState)}>
			<div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
			  <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
				<div class="text-center">
				  <h1 class="block text-2xl font-bold text-gray-800">Start your free trial</h1>
				  <p class="mt-2 text-sm text-gray-600">
					Already have an account?
					<a class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
					  Sign in here
					</a>
				  </p>
				</div>
  
				<div class="mt-5">
				  <button type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
					<svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
					  <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"></path>
					  <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"></path>
					  <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"></path>
					  <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"></path>
					</svg>
					Sign up with Google
				  </button>
  
				  <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>
  
				  <div class="grid grid-cols-2 gap-4">
					<Field name="firstName">
					  <label for="firstName">First name</label>
					  <input type="text" id="firstName" bind:value={formState.fields.firstName.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="John">
					  {#if formState.errors.firstName}
						<p class="text-red-500">{formState.errors.firstName}</p>
					  {/if}
					</Field>
					
					<Field name="lastName">
					  <label for="lastName">Last name</label>
					  <input type="text" id="lastName" bind:value={formState.fields.lastName.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="Doe">
					  {#if formState.errors.lastName}
						<p class="text-red-500">{formState.errors.lastName}</p>
					  {/if}
					</Field>
					
					<Field name="email">
					  <label for="email">Email</label>
					  <input type="email" id="email" bind:value={formState.fields.email.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="you@email.com">
					  {#if formState.errors.email}
						<p class="text-red-500">{formState.errors.email}</p>
					  {/if}
					</Field>
					
					<Field name="companyName">
					  <label for="companyName">Company name</label>
					  <input type="text" id="companyName" bind:value={formState.fields.companyName.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="Preline">
					  {#if formState.errors.companyName}
						<p class="text-red-500">{formState.errors.companyName}</p>
					  {/if}
					</Field>
					
					<Field name="newPassword">
					  <label for="newPassword">New password</label>
					  <input type="password" id="newPassword" bind:value={formState.fields.newPassword.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="********">
					  {#if formState.errors.newPassword}
						<p class="text-red-500">{formState.errors.newPassword}</p>
					  {/if}
					</Field>
					
					<Field name="currentPassword">
					  <label for="currentPassword">Current password</label>
					  <input type="password" id="currentPassword" bind:value={formState.fields.currentPassword.value} class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
						focus:pt-6
						focus:pb-2
						[&:not(:placeholder-shown)]:pt-6
						[&:not(:placeholder-shown)]:pb-2
						autofill:pt-6
						autofill:pb-2" placeholder="********">
					  {#if formState.errors.currentPassword}
						<p class="text-red-500">{formState.errors.currentPassword}</p>
					  {/if}
					</Field>
				  </div>
				  
				  <Field name="termsAccepted">
					<input type="checkbox" id="termsAccepted" bind:checked={formState.fields.termsAccepted.value} class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500">
					<label for="termsAccepted" class="text-sm">I accept the <a class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">Terms and Conditions</a></label>
					{#if formState.errors.termsAccepted}
					  <p class="text-red-500">{formState.errors.termsAccepted}</p>
					{/if}
				  </Field>
  
				  <div class="mt-5">
					<SubmitButton class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Get started</SubmitButton>
				  </div>
				</div>
			  </div>
			</div>
		  </Form>
		</div>
	  </div>
  
	  <div class="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
		<span class="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">50,000</span>
		individuals and companies trust Preline
	  </div>
  
	  <div class="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-24">
		<!-- SVG Icons for clients go here -->
	  </div>
	</div>
  </div>
  