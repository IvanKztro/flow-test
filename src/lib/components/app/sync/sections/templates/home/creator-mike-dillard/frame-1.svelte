<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
import * as Menubar from "$lib/components/ui/menubar";
	import { Menu, Search, ThumbsUp } from "lucide-svelte";
	import * as Sheet from '$lib/components/ui/sheet';


const menu = [
		{
			name: 'Home',
			href: '#'
		},
		{
			name: 'About',
			href: '#'
		},
		{
			name: 'services',
			href: '#'
		},
		{
			name: 'Show',
			href: '#'
		},
		{
			name: 'Blog',
			href: '#'
		},
		{
			name: 'Reviews',
			href: '#'
		}
	];

</script>

<section class="container mx-auto flex w-auto flex-col sm:flex-row sm:space-x-4">
	<div class="grid h-full w-full grid-cols-1 sm:grid-cols-8">
		<div class="flex h-full items-center justify-center row-span-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 140 140">
				<path d="M0 0h140v140H0z" fill="#e5e7eb" />
				<path
					d="M88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
					fill="#e5e7eb"
				/>
				<path
					d="M89.48 52.32H50.29a4.52 4.52 0 00-4.52 4.52V84a4.53 4.53 0 004.52 4.52h39.19A4.52 4.52 0 0094 84V56.84a4.52 4.52 0 00-4.52-4.52zm-33.16 5.27a5.28 5.28 0 11-5.27 5.28 5.27 5.27 0 015.27-5.28zM88 82.46H51.8v-4.52l6.74-6.74a1.13 1.13 0 011.6 0l5.23 5.23 12.76-12.77a1.13 1.13 0 011.6 0L88 71.91z"
					fill="#d1d5db"
				/>
			</svg>
		</div>

		<div class="hidden sm:block col-span-7 w-auto py-4 justify-center text-center text-3xl font-bold sm:text-center">
			<div class='flex items-center space-x-10 mt-7 justify-between'>
			  <Menubar.Root class='bg-transparent flex space-x-10 font-normal'>
				<Menubar.Menu>
				  <Menubar.Trigger class='text-lg'>Home</Menubar.Trigger>
				</Menubar.Menu>
				<Menubar.Menu>
				  <Menubar.Trigger class='text-lg'>About</Menubar.Trigger>
				  <Menubar.Content>
					<Menubar.Item>Submenu 1</Menubar.Item>
					<Menubar.Item>Submenu 2</Menubar.Item>
				  </Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
				  <Menubar.Trigger class='text-lg'>Show</Menubar.Trigger>
				  <Menubar.Content>
					<Menubar.Item>Example 1</Menubar.Item>
					<Menubar.Item>Example 2</Menubar.Item>
				  </Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
				  <Menubar.Trigger class='text-lg'>Blog</Menubar.Trigger>
				</Menubar.Menu>
				<Menubar.Menu>
				  <Menubar.Trigger class='text-lg'>Reviews</Menubar.Trigger>
				</Menubar.Menu>
			  </Menubar.Root>
			  
			  <div class='flex space-x-4'>
				<Button class='w-auto' variant='outline'>
				  <ThumbsUp class='mr-2'/>
				  Like 100k
				</Button>
			  </div>
			</div>
		  </div>
		  
		  <div class="block sm:hidden col-span-7 w-auto py-4 justify-center text-center text-3xl font-bold sm:text-center">
			<Sheet.Root>
			  <Sheet.Trigger asChild let:builder>
				<Button variant="outline" size="icon" class="shrink-0 sm:hidden " builders={[builder]}>
				  <Menu class="h-5 w-5" />
				  <span class="sr-only">Toggle navigation menu</span>
				</Button>
			  </Sheet.Trigger>
			  <Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
				  {#each menu as { name, href }}
					<a
					  {href}
					  class="{href === '#' ? 'text-foreground' : 'text-muted-foreground'} capitalize"
					>
					  {name}
					</a>
				  {/each}
				</nav>
			  </Sheet.Content>
			</Sheet.Root>
		  </div>
		  
		  <div class="grid grid-rows col-span-7 mr-1 w-auto whitespace-pre-line py-4 text-center text-3xl font-bold sm:text-center sm:text-5xl">
			<div class="flex items-center w-full sm:w-auto justify-start">
			  <Search class="mr-2" />
			  <Input placeholder="Search for classes and/or products" class="h-14 w-full text-lg font-normal sm:w-80" />
			</div>
		  </div>
	</div>
</section>
