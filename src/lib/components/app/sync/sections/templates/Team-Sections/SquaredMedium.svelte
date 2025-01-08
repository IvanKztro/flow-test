<script lang="ts">
    import * as Card from "$lib/components/ui/card";
  
    const teamMembers = [
      {
        name: 'David Forren',
        role: 'Founder / CEO',
        img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Amil Evara',
        role: 'UI/UX Designer',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Ebele Egbuna',
        role: 'Support Consultant',
        img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Maria Powers',
        role: 'Director of sales',
        img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Delia Pawelke',
        role: 'Front-end Developer',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Tom Lowry',
        role: 'UI/UX Designer',
        img: 'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Louise Donadieu',
        role: 'Support Consultant',
        img: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Jeff Fisher',
        role: 'Project Manager',
        img: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      },
      {
        name: 'Sophia Harrington',
        role: 'Project Manager',
        img: 'https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80'
      }
    ];
  </script>
  
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Our leadership</h2>
    </div>
  
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
      {#each teamMembers as member}
        <div class="text-center">
          <Card.Root>
            <Card.Header>
              <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={member.img} alt="Image Description" />
              <div class="mt-2 sm:mt-4">
                <Card.Title class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">{member.name}</Card.Title>
                <Card.Description class="text-xs text-gray-600 sm:text-sm lg:text-base">{member.role}</Card.Description>
              </div>
            </Card.Header>
          </Card.Root>
        </div>
      {/each}
    </div>
  </div>
  