<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	const testimonial = {
		quote:
			'To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.',
		author: {
			name: 'Nicole Grazioso',
			title: 'Director Payments & Risk | Airbnb',
			image:
				'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
		}
	};
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
		<div class="mb-24 hidden sm:px-6 md:mb-0 md:block">
			<div class="relative">
				<img class="rounded-xl" src={testimonial.author.image} alt="Image Description" />

				<!-- SVG Element -->
				<div class="absolute bottom-0 start-0 -z-[1] -translate-x-14 translate-y-10">
					<svg
						class="h-auto max-w-40 text-gray-400"
						width="696"
						height="653"
						viewBox="0 0 696 653"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
						<circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
						<circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
						<circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
						<circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
						<circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
						<circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
						<circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
					</svg>
				</div>
				<!-- End SVG Element -->
			</div>
		</div>
		<!-- End Col -->

		<div>
			<!-- Blockquote -->
			<Card.Root>
				<Card.Header>
					<svg
						class="absolute start-0 top-0 size-24 -translate-x-8 -translate-y-4 transform text-gray-200"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
							fill="currentColor"
						/>
					</svg>
				</Card.Header>
				<Card.Content>
					<div class="relative z-10">
						<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
							Featured client
						</p>

						<p
							class="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal"
						>
							{testimonial.quote}
						</p>
					</div>
				</Card.Content>
				<Card.Footer class="mt-6">
					<div class="flex items-center">
						<div class="flex-shrink-0 md:hidden">
							<Avatar.Root>
								<Avatar.Image
									src={testimonial.author.image}
									alt="Image Description"
									class="size-40 rounded-full"
								/>
								<Avatar.Fallback
									>{testimonial.author.name
										.split(' ')
										.map((n) => n[0])
										.join('')}</Avatar.Fallback
								>
							</Avatar.Root>
						</div>
						<div class="ms-4 md:ms-0">
							<div class="text-base font-semibold text-gray-800">{testimonial.author.name}</div>
							<div class="text-xs text-gray-500">{testimonial.author.title}</div>
						</div>
					</div>
				</Card.Footer>

				<div class="mt-8 flex w-full lg:mt-14 pl-6 pb-6">
					<Button>Read the story</Button>
				</div>
			</Card.Root>
			<!-- End Blockquote -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Testimonials -->
