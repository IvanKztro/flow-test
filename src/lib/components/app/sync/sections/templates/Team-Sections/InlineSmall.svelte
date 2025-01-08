<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Twitter, Github, Slack } from 'lucide-svelte';

	// Define the crew members array
	const crew = [
		{
			id: 1,
			name: 'David Forren',
			role: 'Founder / CEO',
			image:
				'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		},
		{
			id: 2,
			name: 'Amil Evara',
			role: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		},
		{
			id: 3,
			name: 'Ebele Egbuna',
			role: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		},
		{
			id: 4,
			name: 'Maria Powers',
			role: 'Director of Sales',
			image:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		},
		{
			id: 5,
			name: 'Tom Lowry',
			role: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		},
		{
			id: 6,
			name: 'Louise Donadieu',
			role: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
			twitter: '#',
			github: '#',
			Slack: '#'
		}
	];
</script>

<!-- Team -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold :text-white md:text-4xl md:leading-tight">Meet the crew</h2>
		<p class="mt-1 text-gray-600 :text-neutral-400">Creative people</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3">
		{#each crew as member}
			<Card.Root class="grid gap-x-4 gap-y-3 sm:flex sm:items-center">
				<Card.Content>
					<Avatar.Root>
						<Avatar.Image src={member.image} alt="Una imagen muy bonita de aguien" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</Card.Content>

				<Card.Content class="sm:flex sm:h-full sm:flex-col">
					<Card.Header>
						<Card.Title class="font-medium text-gray-800 :text-neutral-200"
							>{member.name}</Card.Title
						>
						<Card.Description class="mt-1 text-xs uppercase text-gray-500 :text-neutral-500"
							>{member.role}</Card.Description
						>
					</Card.Header>

					<!-- Social Brands -->
					<Card.Footer class="mt-2 space-x-2.5 sm:mt-auto">
						<a
							class="inline-flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 :text-neutral-500 :hover:text-neutral-200"
							href={member.twitter}
						>
							<Twitter class="size-3.5 flex-shrink-0" />
						</a>
						<a
							class="inline-flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 :text-neutral-500 :hover:text-neutral-200"
							href={member.github}
						>
							<Github class="size-3.5 flex-shrink-0" />
						</a>
						<a
							class="inline-flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 :text-neutral-500 :hover:text-neutral-200"
							href={member.Slack}
						>
							<Slack class="size-3.5 flex-shrink-0" />
						</a>
					</Card.Footer>
					<!-- End Social Brands -->
				</Card.Content>
			</Card.Root>
		{/each}

		<!-- Hiring Section -->
		<Card.Root class="grid gap-x-4 gap-y-3 sm:flex sm:items-center">
			<Card.Content>
				<Card.Header>
					<Card.Title class="font-medium text-gray-800 :text-neutral-200"
						>We are hiring!</Card.Title
					>
					<Card.Description>
						<a
							class="text-sm text-blue-600 decoration-2 hover:underline :text-blue-500"
							href="#"
						>
							Check out / Careers
						</a>
					</Card.Description>
				</Card.Header>
			</Card.Content>
		</Card.Root>
		<!-- End Hiring Section -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Team -->
