<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";

    const { section } = $props<{
        section: {
            settings: {
                heading: string;
                description: string;
                backgroundImage?: string;
                textAlignment: "left" | "center" | "right";
            };
            blocks?: Array<{
                type: "button";
                settings: {
                    text: string;
                    link: string;
                    style: "primary" | "secondary" | "outline";
                };
            }>;
        };
    }>();

    const textAlignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    const buttonVariants = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
    };
</script>

<section
    class="relative min-h-[400px] flex items-center justify-center p-8"
    style={section.settings.backgroundImage
        ? `background-image: url(${section.settings.backgroundImage})`
        : ""}
>
    <div
        class={`container mx-auto ${textAlignmentClasses[section.settings.textAlignment]}`}
    >
        <h1 class="text-4xl font-bold mb-4">{section.settings.heading}</h1>
        <p class="text-lg mb-8">{section.settings.description}</p>

        {#if section.blocks && section.blocks.length > 0}
            <div class="flex gap-4 justify-center">
                {#each section.blocks as block}
                    {#if block.type === "button"}
                        <Button
                            href={block.settings.link}
                            class={buttonVariants[block.settings.style]}
                        >
                            {block.settings.text}
                        </Button>
                    {/if}
                {/each}
            </div>
        {/if}
    </div>
</section>
