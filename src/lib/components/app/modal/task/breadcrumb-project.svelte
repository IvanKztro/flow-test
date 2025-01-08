<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";

  let { portfolioId, project, task, milestone} = $props()
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link class="text-xs" href={`/${portfolioId}/p/${project?.id}`}
        >{project?.name}</Breadcrumb.Link
      >
    </Breadcrumb.Item>
    /
    <Breadcrumb.Item>
      <Breadcrumb.Link
        class="text-xs"
        href={`/${portfolioId}/p/${project?.id}/m/${milestone?.id || task?.milestoneId}`}
        >{milestone?.name}</Breadcrumb.Link
      >
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
