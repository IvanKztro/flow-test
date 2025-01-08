<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { Button } from "$lib/components/ui/button";

    let slides = [
        {
            title: 'Nike React',
            subtitle: 'Rewriting sport\'s playbook for billions of athletes',
            image: 'https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'CoolApps',
            subtitle: 'From mobile apps to gaming consoles',
            image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Grumpy',
            subtitle: 'Bringing Art to everything',
            image: 'https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
</script>

<section class="container mx-auto flex flex-col justify-start space-y-8 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
    <div class='w-max-5xl justify-center pt-4'>
        <Carousel.Root class="relative rounded-lg">
            <Carousel.Content class='min-h-16'>
                {#each slides as slide, i (i)}
                    <Carousel.Item class="hs-carousel-slide">
                        <div class="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center rounded-3xl" style="background-image: url('{slide.image}')">
                            <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                <span class="block text-white ml-6">{slide.title}</span>
                                <span class="block text-white text-xl md:text-3xl ml-6">{slide.subtitle}</span>
                                <div class="mt-5 ml-6">
                                    <Button variant= 'outline' >
                                        Read Cases Studios
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous class='absolute top-1/2 transform -translate-y-1/2 left-2 inline-flex justify-center items-center bg-transparent border border-transparent w-10 h-full'/>            
            <Carousel.Next class='absolute top-1/2 transform -translate-y-1/2 right-2 inline-flex justify-center items-center bg-transparent border border-transparent  w-10 h-full'/>
        </Carousel.Root>
    </div>
</section>
