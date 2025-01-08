<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import { Input } from "$lib/components/ui/input";


</script>


<section class="container mx-auto w-auto flex flex-col sm:flex-row sm:space-x-4">
		<div class="grid w-full h-full grid-cols-1 sm:grid-cols-4">
			<div class="flex items-end justify-center h-full">
                <svg width="250" height="400" viewBox="0 0 331 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_7_267)">
                    <rect x="1" y="1.70999" width="328.636" height="457.29" rx="3" fill="#F6F5FF" stroke="#562EFF" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M142.467 256C140.095 256 138.343 253.745 139.239 251.668C143.389 242.071 153.14 236.571 164.499 236.571C175.86 236.571 185.612 242.071 189.763 251.668C190.657 253.745 188.906 256 186.533 256H142.467ZM151.144 218.357C151.144 210.991 157.137 205 164.501 205C171.867 205 177.858 210.991 177.858 218.357C177.858 225.723 171.867 231.714 164.501 231.714C157.137 231.714 151.144 225.723 151.144 218.357Z" fill="#562EFF"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_7_267">
                      <rect width="330.636" height="459.29" fill="white" transform="translate(0 0.709991)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

			<div class="col-span-3 w-auto mr-1 whitespace-pre-line py-4 text-center font-bold sm:pt-32 sm:text-center text-3xl sm:text-5xl">
				<span class='whitespace-pre-line'>Tell Your Readers What They
                     Get When They Subscribe</span>
                
                     <div class="mt-7 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                        <div class="flex w-full justify-center sm:w-auto sm:justify-center">
                            <Input placeholder="Enter your e-mail address" class="h-14 w-full text-lg font-normal sm:w-80" />
                        </div>
                        <div class="flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-center">
                            <Button class="h-14 w-full text-sm sm:w-36">GET [VALUE]</Button>
                        </div>
                    </div>   
                    <div class="mt-10 flex flex-col items-center text-2xl font-medium sm:flex-row sm:justify-center">
                        <p class='whitespace-pre-line'><strong>FREE BONUS</strong> - Give them a second reason to opt-in by
                            giving them additional domnloadable gift
                        </p>
                    </div> 
                    
                    <div class='mt-40 mb-4 flex justify-start'>
                        <span class='text-lg'>[your name]<span></span>
                    </div>
                    
				
			</div>
		</div>
</section>