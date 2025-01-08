<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ChevronRight } from 'lucide-svelte';

	const cards = [
		{
			title: 'London, UK',
			img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Bristol, UK',
			img: 'https://images.unsplash.com/photo-1612046264803-6d6b67fdee80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Oxford, UK',
			img: 'https://images.unsplash.com/photo-1582542021865-bde52fd7c3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Edinburgh, UK',
			img: 'https://images.unsplash.com/photo-1571044880241-95d4c9aa06f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Newcastle, UK',
			img: 'https://images.unsplash.com/photo-1598964356161-754cc07fcd36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Liverpool, UK',
			img: 'https://images.unsplash.com/photo-1566328386401-b2980125f6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		},
		{
			title: 'Manchester, UK',
			img: 'https://images.unsplash.com/photo-1597740049284-388659a41286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		}
	];
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
		{#each cards as { title, img }}
			<a
				class="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md"
				href="#"
			>
				<Card.Root>
					<Card.Content class="p-4 md:p-5">
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<img
									class="size-[38px] rounded-full object-cover"
									src={img}
									alt="Image Description"
									style="width: 40px; height: 40px;"
								/>
								<div class="ms-3">
									<h3 class="font-semibold text-gray-800 group-hover:text-blue-600">
										{title}
									</h3>
								</div>
							</div>
							<div class="ps-3">
								<ChevronRight />
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
