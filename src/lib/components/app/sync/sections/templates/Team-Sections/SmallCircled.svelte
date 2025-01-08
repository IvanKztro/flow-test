<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	const teamMembers = [
		{
			name: 'David Forren',
			position: 'Founder / CEO',
			image:
				'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Amil Evara',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Ebele Egbuna',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Maria Powers',
			position: 'Director of sales',
			image:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Delia Pawelke',
			position: 'Front-end Developer',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Tom Lowry',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Louise Donadieu',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Jeff Fisher',
			position: 'Project Manager',
			image:
				'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Sophia Harrington',
			position: 'Project Manager',
			image:
				'https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Christina Kray',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Amy Forren',
			position: 'Product Designer',
			image:
				'https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Philip Williams',
			position: 'Support Consultant',
			image:
				'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Brian Lofoten',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Jessica Dorsey',
			position: 'Director of sales',
			image:
				'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		},
		{
			name: 'Nick Jackson',
			position: 'UI/UX Designer',
			image:
				'https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
		}
	];
</script>

<!-- Team -->
<div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our team</h2>
		<p class="mt-1 text-gray-600">Creative people</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
		{#each teamMembers as member}
			<div class="text-center">
				<!-- <img src={member.image} alt="Image Description" /> -->
				<Avatar.Root class="mx-auto size-24 rounded-full">
					<Avatar.Image src={member.image} alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="mt-2 sm:mt-4">
					<div>
						<span class="font-medium text-gray-800"
							>{member.name}</span
						>
						<span class="text-sm text-gray-600"
							>{member.position}</span
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Grid -->

	<!-- Card -->
	<div class="mt-12 flex justify-center">
		<Card.Root class="rounded-full border border-gray-200 px-3 py-0.5">
			<Card.Content class="flex items-center gap-x-3">
				<span class="text-sm text-gray-500 mt-2">Want to work with us?</span>
				<a
					class="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500 mt-2"
					href="#"
				>
					We are hiring
				</a>
			</Card.Content>
		</Card.Root>
	</div>
	<!-- End Card -->
</div>
<!-- End Team -->
