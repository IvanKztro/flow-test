<script>
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	const items = [
		{
			id: 'item-1 ',
			title: 'Question 1',
			content: 'Answer the question 1'
		},
		{
			id: 'item-2',
			title: 'Question 2',
			content: 'Answer the question 2'
		},
		{
			id: 'item-3',
			title: 'Question 3',
			content: 'Answer the question 3'
		},
		{
			id: 'item-4',
			title: 'Question 4',
			content: 'Answer the question 4'
		},
		{
			id: 'item-5',
			title: 'Question 5',
			content: 'Answer the question 5'
		}
	];
</script>

<section class="container mx-auto flex flex-col items-center space-y-8 py-16">
	<h2 class="max-w-3xl text-center text-4xl font-extrabold">
		Some Key Facts That Your Client/Employer Will Want to Know About You
	</h2>
	<div class="w-[42rem]">
		<Accordion.Root>
			{#each items as item}
				<Accordion.Item value={item.id} class="w-full">
					<Accordion.Trigger>{item.title}</Accordion.Trigger>
					<Accordion.Content>{item.content}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
	<p class="max-w-xl text-center">
		Make them act with a strong call-to-action and reminder about the value you will provide when
		they hire you.
	</p>
	<Card.Root class="flex items-center px-8 py-2">
		<Avatar.Root class="h-32 w-32">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div>
			<Card.Header>
				<Card.Title>First name Last Name</Card.Title>
				<Card.Description>Title</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-1">
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-3.5 w-3.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
						/>
					</svg>
					<p>0987 654 3210</p>
				</div>
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-3.5 w-3.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>

					<p>you@yourdomain.com</p>
				</div>
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-4 w-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>

					<p>@yoursocial</p>
				</div>
			</Card.Content>
		</div>
	</Card.Root>
</section>
