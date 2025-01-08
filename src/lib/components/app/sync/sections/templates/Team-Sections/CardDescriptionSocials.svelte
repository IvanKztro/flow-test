<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import { Github, Twitter, Slack } from 'lucide-svelte';

	const teamMembers = [
		{
			name: 'David Forren',
			position: 'Founder / CEO',
			image:
				'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Amil Evara',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Ebele Egbuna',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Maria Powers',
			position: 'Director of sales',
			image:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Delia Pawelke',
			position: 'Front-end Developer',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Tom Lowry',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Louise Donadieu',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		},
		{
			name: 'Jeff Fisher',
			position: 'Project Manager',
			image:
				'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			description: 'I am an ambitious workaholic, but apart from that, pretty simple person.'
		}
	];
</script>

<!-- Team -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our leadership</h2>
		<p class="mt-1 text-gray-600">Creative people</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each teamMembers as member}
			<Card.Root
				class="flex flex-col rounded-xl border border-gray-200 bg-white p-4"
			>
				<div class="flex items-center gap-x-4">
					<Avatar.Root class="size-20 rounded-full">
						<Avatar.Image src={member.image} alt="Image Description" />
					</Avatar.Root>
					<div class="grow">
						<Card.Header>
							<Card.Title class="font-medium text-gray-800"
								>{member.name}</Card.Title
							>
							<Card.Description class="text-xs uppercase text-gray-500"
								>{member.position}</Card.Description
							>
						</Card.Header>
					</div>
				</div>
				<p class="mt-3 text-gray-500">{member.description}</p>

				<!-- Social Brands -->
				<div class="mt-3 flex space-x-1">
					<a
						class="inline-flex size-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100"
						href="#"
					>
						<Twitter class="size-3.5 flex-shrink-0" />
					</a>
					<a
						class="inline-flex size-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100"
						href="#"
					>
						<Github class="size-3.5 flex-shrink-0" />
					</a>
					<a
						class="inline-flex size-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100"
						href="#"
					>
						<Slack class="size-3.5 flex-shrink-0" />
					</a>
				</div>
				<!-- End Social Brands -->
			</Card.Root>
		{/each}

		<a
			class="group col-span-full flex flex-col justify-center rounded-xl border border-dashed border-gray-200 p-4 text-center hover:shadow-sm md:p-6 lg:col-span-1"
			href="#"
		>
			<h3 class="text-lg text-gray-800">We are hiring!</h3>
			<div>
				<span
					class="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700"
				>
					See all opening positions
					<svg
						class="size-4 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
					>
				</span>
			</div>
		</a>
	</div>
	<!-- End Grid -->
</div>
<!-- End Team -->
